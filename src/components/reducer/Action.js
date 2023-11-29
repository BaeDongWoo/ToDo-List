export const SET_DATE = 'SET_DATE';
export const SET_TODO_LIST = 'SET_TODO_LIST';
export const SET_ALL_TODO_LIST = 'SET_ALL_TODO_LIST';

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});

export const setTodoList = (todoList) => ({
  type: SET_TODO_LIST,
  payload: todoList,
});

export const setAllTodoList = (allTodoList) => ({
  type: SET_ALL_TODO_LIST,
  payload: allTodoList,
});
