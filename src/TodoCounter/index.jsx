import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (
        <h2>
            { completedTodos < totalTodos ?
                `Has completado ${ completedTodos } de ${ totalTodos } TODOs` 
                : `¡Felicidades! Has completado todos tus TODOs.`
            }
        </h2>
    )
}

export { TodoCounter };