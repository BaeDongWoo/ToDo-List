import './TodoList.css';
import TodoListHeader from './TodoListHeader';
import PrintTodo from './PrintTodo';
import { DateFormat } from '../../form/DateFormat';
import Button from '../../form/Button';
import { setAllTodoList } from '../../reducer/Action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CustomConfirm from '../../form/CustomConfirm';
import axios from 'axios';
const TodoList = ({ date, setTodoList, allTodoList }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const userInfo = useSelector((state) => state.userInfo);
  const token = JSON.parse(sessionStorage.getItem('token'));
  const handleButtonClick = () => {
    setShowConfirm(true);
  };
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const saveHandler = async () => {
    const dateFormat = DateFormat(date);
    const tempAllTodo = allTodoList.filter((todo) => todo.date !== dateFormat);
    tempAllTodo.push({ date: dateFormat, todoList: todoList });
    dispatch(setAllTodoList([...tempAllTodo]));
    if (token) {
      try {
        const setTodos = todoList.map((todo) => {
          return { ...todo, checked: todo.checked === false ? '0' : '1' };
        });
        const response = await axios.post(
          'http://localhost:3005/saveTodo',
          {
            userInfo,
            dateFormat,
            setTodos,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const header = response.headers.get('Authorization');
        const refreshToken = header.slice(7);
        sessionStorage.setItem('token', JSON.stringify(refreshToken));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const rollbackHandler = () => {
    dispatch(setAllTodoList([...allTodoList]));
  };
  return (
    <div className="todo-list-form">
      <TodoListHeader
        date={date}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <div className="todo-list-body">
        <PrintTodo todoList={todoList} setTodoList={setTodoList} />
      </div>
      <div className="todo-list-footer">
        <Button
          className={'save-btn'}
          label={'저장하기'}
          clickHandler={handleButtonClick}
        />
      </div>
      {showConfirm && (
        <CustomConfirm
          setShowConfirm={setShowConfirm}
          message={'저장하시겠습니까?'}
          confirm={saveHandler}
          cancel={rollbackHandler}
        />
      )}
    </div>
  );
};
export default TodoList;
