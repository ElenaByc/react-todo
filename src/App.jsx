import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
