import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TodoContainer from './components/TodoContainer';
import './App.css';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todolist" element={<TodoContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
