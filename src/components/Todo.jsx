import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
export default function Todo()
{
    //Lifting State up is finding common state required by multiple components and 
    //putting it in parent. Here Form and TodoList components need todos state.
    const [todos, setTodos]=useState([]);
    const completedTodos= todos.filter((item)=>item.done===true).length
    const totalTodos=todos.length;
    
    return(
        <div>
           <Form todos={todos} setTodos={setTodos}/>
           <TodoList todos={todos} setTodos={setTodos}/>
           <Footer completedTodos= {completedTodos} totalTodos={totalTodos}/>
        </div>
    )
}