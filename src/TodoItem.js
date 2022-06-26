import "./TodoForm.css";

function TodoItem({todo, onChange, onDelete}){
    return (
        <div className="todo-item" key={todo.id}>
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={e =>{
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} />
                {todo.text}
                <button className="todo-item_button" onClick={()=>{
                    onDelete(todo);
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;