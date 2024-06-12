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
}

export default TodoList;