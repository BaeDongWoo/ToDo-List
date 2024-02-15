import { collection, getDocs, query } from 'firebase/firestore';
import { fireStore } from '../config/firebaseConfig';

export const getData = async () => {
  const uid = JSON.parse(sessionStorage.getItem('userInfo'));
  const q = query(collection(fireStore, 'users', uid, 'all_todo_list'));
  const response = await getDocs(q);
  const allTodoList = [];
  response.forEach((todo_list) => {
    const list = todo_list.data().todo_list;
    allTodoList.push({
      date: todo_list.id,
      todoList: list.map((todo) => todo),
    });
  });
  return allTodoList;
};
