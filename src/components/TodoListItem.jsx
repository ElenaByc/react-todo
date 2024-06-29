import PropTypes from 'prop-types';
import style from './TodoListItem.module.css';
import CheckmarkIcon from '../assets/checkmark.svg?react';
import RemoveIcon from '../assets/cross.svg?react';

const TodoListItem = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  return (
    <li className={`${style.listItem} ${todo.done ? style.done : ''}`}>
      <button
        type="button"
        title={`${todo.done ? 'Uncheck' : 'Mark Done'}`}
        onClick={() => onUpdateTodo(todo.id, todo.done)}
        className={style.checkmarkBtn}>
        <CheckmarkIcon height="18px" width="18px" />
      </button>
      <div className={style.itemTitle}>{todo.title}</div>
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

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default TodoListItem;