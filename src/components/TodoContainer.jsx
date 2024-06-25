import { useEffect, useState, useCallback } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  'Content-Type': 'application/json',
};

const TodoContainer = () => {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortAsc, setSortAsc] = useState(true);

  const compareRecords = (objectA, objectB) => {
    const mul = sortAsc ? 1 : -1;
    if (objectA.fields.title > objectB.fields.title) {
      return 1 * mul;
    }
    if (objectA.fields.title === objectB.fields.title) {
      return 0;
    }
    return -1 * mul;
  };

  const compareTodos = (todoA, todoB) => {
    const mul = sortAsc ? 1 : -1;
    if (todoA.title > todoB.title) {
      return 1 * mul;
    }
    if (todoA.title === todoB.title) {
      return 0;
    }
    return -1 * mul;
  };

  const sortTodoList = () => {
    const newTodoList = [...todoList];
    newTodoList.sort(compareTodos);
    setTodoList(newTodoList);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      headers: headers,
    };
    try {
      const response = await fetch(url, options);
      setIsLoading(false);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.sort(compareRecords).map(record => {
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
    sortTodoList();
  }, [sortAsc]);

  const addTodo = async (newTodo) => {
    const data = {
      fields: {
        title: newTodo.title,
      },
    };
    const options = {
      method: 'POST',
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
      setTodoList([...todoList, newTodo].sort(compareTodos));
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(
      (todo) => todo.id != id
    );
    setTodoList(newTodoList);
  };

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          todoList={todoList}
          sortAsc={sortAsc}
          onRemoveTodo={removeTodo}
          onToggleSort={toggleSort}
        />
      )}
    </>
  );
};

export default TodoContainer;