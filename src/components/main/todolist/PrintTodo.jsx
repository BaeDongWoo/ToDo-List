import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
                  <li
                    className="todo"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={todo.checked}
                      onChange={() => toggleChecked(todo.id)}
                    />
                    <div
                      className={
                        todo.checked ? 'todo-title-checked' : 'todo-title'
                      }
                    >
                      {todo.title}
                    </div>
                    <button
                      className="todo-delete-btn"
                      onClick={() => deleteTodolist(todo.id)}
                    >
                      x
                    </button>
                  </li>
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
