import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Ver a mi ex con su nueva pareja', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
 
  const { 
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error } = useLocalStorage('TODOS_V1', []);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const [ searchValue, setSearchValue ] = React.useState('');

  // console.log(1)
  // React.useEffect(()=>{
  //   console.log(2)
  // }, [totalTodos]);
  // console.log(3);


  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

    return (
        <AppUI 
            loading={loading}
            error={error}
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            />
    );
}

export default App;
