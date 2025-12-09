import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Ver a mi ex con su nueva pareja', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter total={3} completed={2} />
      <TodoSearch />

      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
