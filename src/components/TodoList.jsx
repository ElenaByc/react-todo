import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import style from './TodoList.module.css';

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul className={style.todoList}>
      {todoList.map(todo =>
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
        />)}
    </ul>
  );
};

TodoList.propTypes = {
	todoList: PropTypes.array.isRequired,
	onRemoveTodo: PropTypes.func.isRequired
};

export default TodoList;