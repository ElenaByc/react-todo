import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>New todo value: <b>{newTodo}</b></p>
      <TodoList />
    </>
  );
}

export default App;
