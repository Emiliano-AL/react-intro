import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Ver a mi ex con su nueva pareja', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
    return (
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    );
}

export default App;
