const TodoListItem = ({ todo }) => <li>{todo.title}</li>;

// I am getting these eslint errors here: 
// 'todo' is missing in props validation eslint react/prop-types
// 'todo.title' is missing in props validation eslint react/prop-types
// so, I added 'react/prop-types': 'off' to eslint rules, is there a better solution? 

export default TodoListItem;