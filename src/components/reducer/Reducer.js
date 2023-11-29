import { SET_DATE, SET_TODO_LIST, SET_ALL_TODO_LIST } from './Action';

const initialMainState = {
  date: new Date(),
  todoList: [],
  allTodoList: [
    {
      date: '2023-11-27',
      todoList: [
        { title: '코테 풀기', checked: true, id: 0 },
        { title: '리액트 강의 듣기', checked: false, id: 1 },
        { title: '프로젝트 회의', checked: false, id: 2 },
      ],
    },
    {
      date: '2023-11-28',
      todoList: [
        { title: '정처기 공부하기', checked: false, id: 0 },
        { title: '블로그 글쓰기', checked: true, id: 1 },
        { title: '버그 수정하기', checked: false, id: 2 },
      ],
    },
  ],
};
const mainReducer = (state = initialMainState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.payload };
    case SET_TODO_LIST:
      return { ...state, todoList: action.payload };
    case SET_ALL_TODO_LIST:
      return { ...state, allTodoList: action.payload };
    default:
      return state;
  }
};
export default mainReducer;
