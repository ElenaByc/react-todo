const InputWithLabel = ({ label, todoTitle, handleTitleChange }) => {
  return (
    <>
      <label htmlFor="todoTitle">{label}: </label>
      <input type="text" id="todoTitle" name={label} value={todoTitle} onChange={handleTitleChange} required />
      <input type="submit" value="Add" /></>
  );
}

export default InputWithLabel;