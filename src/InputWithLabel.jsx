const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  return (
    <>
      <label htmlFor="todoTitle">{children}: </label>
      <input
        type="text"
        id="todoTitle"
        name={children}
        value={todoTitle}
        onChange={handleTitleChange}
        required />
      <input type="submit" value="Add" /></>
  );
}

export default InputWithLabel;