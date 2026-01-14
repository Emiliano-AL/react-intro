import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
// import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI() {

  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } 
    = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
    
        <TodoList>
          { loading && ( 
            <>
            <TodosLoading />  
            <TodosLoading />  
            <TodosLoading />
            </>
          )}
          { error && <TodosError />}
          { (!loading && !searchedTodos.length) && <EmptyTodos />}
          { searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

      <CreateTodoButton
        setOpenModalVal={setOpenModal}
      />

      { openModal && (
        <Modal>
          This is modal content
        </Modal>
      )}
    </>
  );
}

export { AppUI };