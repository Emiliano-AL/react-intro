import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModalVal }) {
    return (
        <button 
            onClick={() => setOpenModalVal(state => !state)}
            className="CreateTodoButton"
            >+</button>
    )
}

export { CreateTodoButton };