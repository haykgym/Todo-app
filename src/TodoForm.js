import { useState } from "react";
import "./TodoForm.css";

function TodoForm({onAdd}){

    const [text, setText] = useState("");
    return (
        <form className="todo-form" onSubmit={e =>{
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className="todo-input" type="text" value={text} onChange={(e)=>{
                setText(e.target.value);
            }}/>
            <button className="todo-form_button">Add</button>
        </form>
    )
}

export default TodoForm;