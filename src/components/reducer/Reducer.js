import {
  SET_DATE,
  SET_TODO_LIST,
  SET_ALL_TODO_LIST,
  USER_INFO,
} from './Action';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialMainState = {
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
  date: new Date(),
  todoList: [],
  allTodoList: [],
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo', 'date', 'todoList', 'allTodoList'],
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
const perReducer = persistReducer(persistConfig, mainReducer);
export default perReducer;
