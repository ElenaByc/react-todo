import { useNavigate } from 'react-router-dom';
import CheckmarkIcon from '../assets/checkmark.svg?react';
import style from './HomePage.module.css';

const HomePage = () => {

  const navigate = useNavigate();
  const gotoTodoList = () => {
    navigate("/todolist");
  };


  return (
    <>
      <div className={style.logoContainer}>
        <div className={style.logoImage}></div>
        <h1 className={style.logoTitle}>TODO:</h1>
      </div>
      <div className={style.greeting}>
        <h2>Welcome to the <span>TODO</span> App!</h2>
        <p>Simplify your life and boost your productivity! Keep all your tasks organized and never forget important things with this amazing app!</p>
        <p>Here you can:</p>
        <ul>
          <li><div className={style.checkmark}><CheckmarkIcon width="20px" height="20"/></div>Effortlessly add new tasks to your list</li>
          <li><div className={style.checkmark}><CheckmarkIcon width="20px" height="20"/></div>View all your tasks in one place for a clear overview</li>
          <li><div className={style.checkmark}><CheckmarkIcon width="20px" height="20"/></div>Organize your tasks by sorting them by title (ascending or descending)</li>
          <li><div className={style.checkmark}><CheckmarkIcon width="20px" height="20"/></div>Mark tasks as done for a satisfying sense of accomplishment</li>
          <li><div className={style.checkmark}><CheckmarkIcon width="20px" height="20"/></div>Remove completed tasks to keep your list clean and focused</li>
        </ul>
      </div>
      <div className={style.gotoTodoListContainer}>
        <h3>Ready to get your tasks organized?</h3>
        <button
          className={style.gotoTodoListBtn}
          onClick={gotoTodoList}
        >
          Go to Your <span>TODO</span> List
        </button>
      </div>
    </>
  );
};

export default HomePage;