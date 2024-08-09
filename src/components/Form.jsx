import { useState } from "react";
import styles from './form.module.css'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
export default function Form({ todos, setTodos }) {
    //const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name:"",done:false});

    function handleSubmit(e) {
      e.preventDefault();
      // It will fetch all prev items todos had and adds the new one to it
      setTodos([...todos, todo]);
      setTodo({name:"",done:false});
    }

    return (
      <div>
        <form
          className={styles.todoform}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={styles.inputContainer}>
            <input
              className={styles.modernInput}
              onChange={(e) => setTodo({name:e.target.value,done:false})}
              type="text"
              value={todo.name}
              placeholder="Enter todo item here"
            />
            <button className={styles.button} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
}
