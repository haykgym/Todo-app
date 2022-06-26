import { useState } from 'react';
import TodoList from './todoList';
import './App.css';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ])
  return (
    <div className="App">
      <div>
        <h1 className="todos">todos</h1>
        <TodoForm  onAdd={text =>{
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false
            }
          ]);
        }}/>
        <TodoList 
          todos={todos}
          onDelete={(todo)=>{
            setTodos(todos.filter((t)=> t.id !== todo.id))
          }}
          onChange={(newTodo)=>{
            setTodos(todos.map(todo=>{
              if(todo.id === newTodo.id){
                return newTodo;
              }
              return todo;
            }))
          }}
          />
        <TodoFooter todos={todos} onClearCompleted={()=>{
          setTodos(todos.filter(todo => !todo.isCompleted));
        }}/>
      </div>
    </div>
  );
}

export default App;
