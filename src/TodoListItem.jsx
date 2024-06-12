import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.listItem}>
      {todo.title}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;