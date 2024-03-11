const AddTodoForm = (props) => {

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    event.target.reset();
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" name="title" />
      <input type="submit" value="Add" />
    </form>
  );
}

export default AddTodoForm;