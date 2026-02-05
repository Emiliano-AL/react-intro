import React, { useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoText, setNewTodoText] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoText);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoText(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoText}
                onChange={onChange}
                placeholder="Cortar cebolla para el almuerzo" />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel" 
                    onClick={onCancel}
                    type="button">Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add" 
                    type="submit">Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };