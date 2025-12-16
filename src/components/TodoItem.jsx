import '../TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
      <li 
        onClick={onComplete}
        className={`TodoItem ${completed ? 'TodoItem--completed' : ''}`}>
          <CompleteIcon 
            completed={completed}
            onComplete={onComplete}
            />
        <p 
          className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}
        </p>
        <DeleteIcon 
          onDelete={onDelete}
          />
      </li>
    )
  }

export { TodoItem };