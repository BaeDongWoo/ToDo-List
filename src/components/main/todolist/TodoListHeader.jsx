const TodoListHeader = ({ date }) => {
  return (
    <div className="todo-header">
      <div className="select-date">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
      </div>
      <div className="add-todo">
        <div className="add-todo-text">일정 추가</div>
        <button className="add-todo-button">+</button>
      </div>
    </div>
  );
};
export default TodoListHeader;
