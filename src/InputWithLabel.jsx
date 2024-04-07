import { useRef, useEffect } from 'react';

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}: </label>
      <input
        ref={inputRef}
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