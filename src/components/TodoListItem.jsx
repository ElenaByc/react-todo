import style from './TodoListItem.module.css';
import RemoveIcon from '../assets/cross-dark.svg?react';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.listItem}>
      {todo.title}
      <button
        type="button"
        title="Remove"
        onClick={() => onRemoveTodo(todo.id)}
        className={style.removeBtn}>

        <RemoveIcon height="18px" width="18px" />
      </button>
    </li>
  );
};

export default TodoListItem;