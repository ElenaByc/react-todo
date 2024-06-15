import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './AddTodoForm.module.css';

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
    <form onSubmit={handleAddTodo} className={style.addTodoForm}>
      <InputWithLabel id="todoTitle" value={todoTitle} handleValueChange={handleTitleChange}>
        <span>Title:&nbsp;</span>
      </InputWithLabel>
      <input type="submit" value="Add" className={style.submitBtn}/>
    </form>
  );
};

export default AddTodoForm;