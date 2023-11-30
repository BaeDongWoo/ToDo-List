import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import './MainPage.css';
import { useEffect, useState } from 'react';
import Header from '../form/Header';
import { DateFormat } from '../form/DateFormat';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAllTodoList, setTodoList } from '../reducer/Action';
import axios from 'axios';
const MainPage = () => {
  const date = useSelector((state) => state.date);
  const allTodoList = useSelector((state) => state.allTodoList);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (userInfo) {
      const getData = async () => {
        const response = await axios.post('http://localhost:3005/getTodoList', {
          userInfo,
        });
        const dateList = response.data.dateList;
        const allList = response.data.allTodoList;
        const setData = [];
        for (let i = 0; i < dateList.length; i++) {
          const tempTodo = allList.filter(
            (todo) => todo.todo_date === dateList[i].todo_date
          );
          const setList = tempTodo.map((todo, idx) => {
            return {
              title: todo.todo_title,
              checked: todo.todo_checked === '0' ? false : true,
              id: idx,
            };
          });
          setData.push({ date: dateList[i].todo_date, todoList: setList });
        }
        dispatch(setAllTodoList(setData));
        const dateFormat = DateFormat(date);
        const todoListForDate = setData.find(
          (item) => item.date === dateFormat
        );
        if (todoListForDate) {
          dispatch(setTodoList(todoListForDate.todoList));
        } else {
          dispatch(setTodoList([]));
        }
      };
      getData();
    } else {
      const dateFormat = DateFormat(date);
      const todoListForDate = allTodoList.find(
        (item) => item.date === dateFormat
      );
      if (todoListForDate) {
        dispatch(setTodoList(todoListForDate.todoList));
      } else {
        dispatch(setTodoList([]));
      }
    }
  }, [date]);
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <div className="profile-calendar">
          <Calendar date={date} />
        </div>
        <div className="todo-form">
          <TodoList
            date={date}
            allTodoList={allTodoList}
            setTodoList={setTodoList}
          />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
