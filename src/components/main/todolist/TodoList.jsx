import './TodoList.css';
import TodoListHeader from './TodoListHeader';
import PrintTodo from './PrintTodo';
import { DateFormat } from '../../form/DateFormat';
const TodoList = ({
  date,
  todoList,
  setTodoList,
  allTodoList,
  setAllTodoList,
}) => {
  const saveBtnHandler = () => {
    const dateFormat = DateFormat(date);
    const tempAllTodo = allTodoList.filter((todo) => todo.date !== dateFormat);
    tempAllTodo.push({ date: dateFormat, todoList: todoList });
    setAllTodoList([...tempAllTodo]);
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
        <button className="save-btn" onClick={saveBtnHandler}>
          저장하기
        </button>
      </div>
    </div>
  );
};
export default TodoList;
