import { useEffect, useState, useCallback } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  'Content-Type': 'application/json',
};


const App = () => {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: headers,
    };
    try {
      const response = await fetch(url, options);
      setIsLoading(false);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map(record => {
        const todo = {
          id: record.id,
          title: record.fields.title
        };
        return todo;
      });
      setTodoList(todos);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (newTodo) => {
    const data = {
      fields: {
        title: newTodo.title,
      },
    };
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedData = await response.json();
      newTodo.id = updatedData.id;
      setTodoList([...todoList, newTodo]);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(
      (todo) => todo.id != id
    );
    setTodoList(newTodoList);
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          todoList={todoList}
          onRemoveTodo={removeTodo}
        />
      )}
    </>
  );
};

export default App;
