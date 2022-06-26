import TodoItem from "./TodoItem";
import "./TodoForm.css";

function TodoList({todos, onChange, onDelete}){
    return <div className="todo-list">
        {todos.map(todo =>{
            return (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    onChange={onChange}
                    onDelete={onDelete}
                    />
            )
        })}
    </div>
}

export default TodoList;