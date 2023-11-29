import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import './PrintTodo.css';
import { useDispatch } from 'react-redux';
const PrintTodo = ({ todoList, setTodoList }) => {
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    let updateTodos = [...todoList];
    const moved = updateTodos.splice(sourceIndex, 1)[0];
    updateTodos.splice(destinationIndex, 0, moved);
    updateTodos.map((todo, index) => ({ ...todo, id: index }));
    dispatch(setTodoList(updateTodos));
  };

  return todoList.length !== 0 ? (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <ul
            className="todo-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoList.map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={todo.id.toString()}
                index={index}
              >
                {(provided) => (
                  <Card
                    todo={todo}
                    setTodoList={setTodoList}
                    provided={provided}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <div className="empty-message">
      <h2>일정이 없습니다.</h2>
    </div>
  );
};

export default PrintTodo;
// let updatedTodos = [...todos];
// updatedTodos[destinationIndex] = updatedTodos.splice(
//   sourceIndex,
//   1,
//   updatedTodos[destinationIndex]
// )[0];
// return updatedTodos.map((todo, index) => ({ ...todo, id: index }));
