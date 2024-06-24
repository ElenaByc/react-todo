import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import style from './TodoList.module.css';
import ArrowIcon from '../assets/arrow.svg?react';

const TodoList = ({ todoList, sortAsc, onRemoveTodo, onToggleSort }) => {
  return (
    <>
      <div className={style.sortContainer}><span>Sort By Title</span>
        <button
          type="button"
          title=""
          onClick={() => onToggleSort()}
          className={sortAsc ? style.toggleSortBtnDown : style.toggleSortBtnUp}>
          <ArrowIcon height="20px" width="20px" />
        </button>
      </div>
      <ul className={style.todoList}>
        {todoList.map(todo =>
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
          />)}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  sortAsc: PropTypes.bool.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleSort: PropTypes.func.isRequired
};

export default TodoList;