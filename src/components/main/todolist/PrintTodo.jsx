import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

const PrintTodo = ({ todoList, setTodoList }) => {
  const deleteTodolist = (id) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  };

  const toggleChecked = (id) => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    setTodoList((todos) => {
      console.log(todos);
      let updatedTodos = [...todos];
      updatedTodos[destinationIndex] = updatedTodos.splice(
        sourceIndex,
        1,
        updatedTodos[destinationIndex]
      )[0];
      return updatedTodos.map((todo, index) => ({ ...todo, id: index }));
    });
  };

  return (
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
  );
};

export default PrintTodo;
