import '../TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
      <li 
        onClick={onComplete}
        className={`TodoItem ${completed ? 'TodoItem--completed' : ''}`}>
          <CompleteIcon />
      {/* <span 
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V
        </span> */}
      <p 
        className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}
        </p>
        <DeleteIcon />
      {/* <span 
        onClick={onDelete}
        className="Icon Icon-delete">X</span> */}
      </li>
    )
  }

export { TodoItem };