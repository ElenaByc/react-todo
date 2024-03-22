import { useState } from 'react';

const AddTodoForm = (props) => {

  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} required />
      <input type="submit" value="Add" />
    </form>
  );
}

export default AddTodoForm;