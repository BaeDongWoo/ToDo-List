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
  const handleButtonClick = () => {
    // if (!userInfo) return alert('저장하기는 로그인 후 이용 가능합니다.');
    setShowConfirm(true);
  };

  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const saveHandler = async () => {
    const dateFormat = DateFormat(date);
    const tempAllTodo = allTodoList.filter((todo) => todo.date !== dateFormat);
    tempAllTodo.push({ date: dateFormat, todoList: todoList });
    dispatch(setAllTodoList([...tempAllTodo]));
    if (userInfo) {
      try {
        const setTodos = todoList.map((todo) => {
          return { ...todo, checked: todo.checked === false ? '0' : '1' };
        });
        await axios.post('http://localhost:3005/saveTodo', {
          userInfo,
          dateFormat,
          setTodos,
        });
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
