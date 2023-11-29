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
const TodoList = ({ date, setTodoList, allTodoList }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleButtonClick = () => {
    setShowConfirm(true);
  };
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const saveHandler = () => {
    const dateFormat = DateFormat(date);
    const tempAllTodo = allTodoList.filter((todo) => todo.date !== dateFormat);
    tempAllTodo.push({ date: dateFormat, todoList: todoList });
    dispatch(setAllTodoList([...tempAllTodo]));
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
