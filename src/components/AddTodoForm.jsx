import { useState } from 'react';
import PropTypes from 'prop-types';
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
    onAddTodo(todoTitle);
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo} className={style.addTodoForm}>
      <InputWithLabel id="todoTitle" value={todoTitle} handleValueChange={handleTitleChange}>
        <span>Title:&nbsp;</span>
      </InputWithLabel>
      <input type="submit" value="Add" className={style.submitBtn} />
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
