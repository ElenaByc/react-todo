import { useRef, useEffect } from 'react';
import style from './InputWithLabel.module.css';

const InputWithLabel = ({ id, value, handleValueChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label className={style.formLabel} htmlFor={id}>{children}</label>
      <input
        className={style.formInput}
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