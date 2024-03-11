import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "Complete Lesson 1.1 assignment"
  },
  {
    id: 2,
    title: "Read pages 1 through 37 of the Road to React textbook"
  },
  {
    id: 3,
    title: "Watch lessons 1-25 of the Learn React course on Scrimba"
  }
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

export default TodoList;