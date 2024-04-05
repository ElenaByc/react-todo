import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {

  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel label="Title" todoTitle={todoTitle} handleTitleChange={handleTitleChange} />
    </form>
  );
}

export default AddTodoForm;