import { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, value, handleValueChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        type="text"
        id={id}
        value={value}
        onChange={handleValueChange}
        required />
    </>
  );
};

export default InputWithLabel;