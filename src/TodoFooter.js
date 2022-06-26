import "./TodoForm.css"

function TodoFooter({todos, onClearCompleted}){

    const completedSize = todos.filter(todo => todo.isCompleted).length
    return (
        <div className="todo-footer">
            <span>{completedSize}/{todos.length} Completed</span>
            <button className="todo-footer_button" onClick={onClearCompleted}>Clear Completed</button>
       </div>
    )
}

export default TodoFooter;