const TodoListItem = ({ todo }) => <li>{todo.title}</li>;

// I am getting these eslint errors here: 
// 'todo' is missing in props validation eslintreact/prop-types
// 'todo.title' is missing in props validation eslintreact/prop-types

export default TodoListItem;