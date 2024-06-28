import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import HomeIcon from '../assets/home.svg?react';
import style from './TodoContainer.module.css';

const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}`;

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  'Content-Type': 'application/json',
};

const TodoContainer = ({ tableName }) => {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortAsc, setSortAsc] = useState(true);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
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

  const fetchData = useCallback(async () => {
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
    setIsLoading(true);
    const options = {
      method: 'GET',
      headers: headers,
    };
    try {
      const response = await fetch(`${url}/${tableName}/?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`, options);
      setIsLoading(false);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.sort(compareRecords).map(record => {
        const todo = {
          id: record.id,
          title: record.fields.title,
          done: record.fields.done ? true : false
        };
        return todo;
      });
      setTodoList(todos);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [tableName, sortAsc]);

  useEffect(() => {
    fetchData();
  }, [fetchData, tableName]);

  const addTodo = async (title) => {
    const data = {
      fields: {
        title: title,
      },
    };
    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`${url}/${tableName}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedData = await response.json();
      const newTodo = {
        title: title,
        id: updatedData.id,
        done: false
      };
      setTodoList([...todoList, newTodo].sort(compareTodos));
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: headers,
    };
    try {
      const response = await fetch(`${url}/${tableName}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedData = await response.json();
      if (updatedData.deleted && updatedData.id === id) {
        const newTodoList = todoList.filter(
          (todo) => todo.id != id
        );
        setTodoList(newTodoList);
      } else {
        throw new Error(`Record with id = ${id} was not deleted`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id, done) => {
    const data = {
      fields: {
        done: !done
      },
    };
    const options = {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`${url}/${tableName}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedData = await response.json();
      console.log('updatedData', updatedData);
      const newTodoList = todoList.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });
      setTodoList(newTodoList);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  return (
    <>
      <button
        title="Home"
        className={style.goHomeBtn}
        onClick={goHome}
      >
        <HomeIcon height="30px" width="30px" />
      </button>
      <h1 className={style.todoListTitle}>{tableName} To&nbsp;Do&nbsp;List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          todoList={todoList}
          sortAsc={sortAsc}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
          onToggleSort={toggleSort}
        />
      )}
    </>
  );
};

TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired
}

export default TodoContainer;
