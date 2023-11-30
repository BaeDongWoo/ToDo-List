import {
  SET_DATE,
  SET_TODO_LIST,
  SET_ALL_TODO_LIST,
  USER_INFO,
} from './Action';

const initialMainState = {
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
  date: new Date(),
  todoList: [],
  allTodoList: [],
};
const mainReducer = (state = initialMainState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.payload };
    case USER_INFO:
      return { ...state, userInfo: action.payload };
    case SET_TODO_LIST:
      return { ...state, todoList: action.payload };
    case SET_ALL_TODO_LIST:
      return { ...state, allTodoList: action.payload };
    default:
      return state;
  }
};
export default mainReducer;
