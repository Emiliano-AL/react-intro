import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button 
            onClick={() => console.log("sample")}
            className="CreateTodoButton"
            >+</button>
    )
}

export { CreateTodoButton };