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
import { doc, query, setDoc } from 'firebase/firestore';
import { fireStore } from '../../config/firebaseConfig';
import { getData } from '../../firebasestore/Data';
const TodoList = ({ date, setTodoList, allTodoList }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleButtonClick = () => {
    setShowConfirm(true);
  };
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const saveHandler = async () => {
    const selectDate = DateFormat(date);
    try {
      const uid = JSON.parse(sessionStorage.getItem('userInfo'));
      const q = query(
        doc(fireStore, 'users', uid, 'all_todo_list', selectDate)
      );
      const data = { todo_list: todoList };
      await setDoc(q, data);
      const allList = await getData();
      dispatch(setAllTodoList(allList));
    } catch (error) {}
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
