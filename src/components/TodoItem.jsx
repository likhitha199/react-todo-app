import PropTypes from 'prop-types'
import styles from './todoItem.module.css';
export default function TodoItem({ item, todos ,setTodos}) {
  function handleDelete(item)
  {
   
   setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name)
  {
 setTodos(todos.map((todo) => todo.name === name ? {...todo,done:!todo.done} : todo));

}
const doneVar=item.done ? styles.completed :""
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={doneVar} onClick={()=>handleClick(item.name)}>
        {item.name}
        </span>
        </div>
      <div className={styles.buttonContainer}>
        <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>x</button>
      </div>
      <hr className={styles.line}/>
    </div>
  )
}