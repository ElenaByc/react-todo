const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      {todo.title}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;