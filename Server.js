const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 3306,
  user: 'root',
  password: 'ehddn5410',
  database: 'todolist',
});
const bodyParser = require('body-parser');
const port = 3005;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post('/login', (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  connection.query(
    'SELECT * FROM USER WHERE USER_ID=? AND PASSWORD=?',
    [userId, password],
    (err, results, fields) => {
      if (err) throw err;
      res.status(200).json(results);
    }
  );
});
app.post('/signUp', (req, res) => {
  const userName = req.body.userName;
  const userId = req.body.userId;
  const password = req.body.password;
  const userData = [userName, userId, password];
  connection.query(
    'SELECT * FROM USER WHERE USER_ID=?',
    [userId],
    (err, results, fields) => {
      if (err) throw err;
      if (results.length !== 0) res.status(200).send('1');
      else {
        connection.query(
          'INSERT INTO user (user_name, user_id, password) VALUES (?, ?, ?)',
          userData,
          (err, re, fie) => {
            if (err) throw err;
            res.status(200).send('0');
          }
        );
      }
    }
  );
});
app.post('/getTodoList', (req, res) => {
  const userInfo = req.body.userInfo;
  connection.query(
    'SELECT todo_date FROM todo_list where todo_user_id=? GROUP BY todo_date',
    [userInfo.user_id],
    (err, results, fields) => {
      const dateList = results;
      connection.query(
        'SELECT todo_id,todo_title,todo_checked,todo_date from todo_list where todo_user_id=?',
        [userInfo.user_id],
        (err, results, fields) => {
          const allTodoList = results;
          const resData = { dateList: dateList, allTodoList: allTodoList };
          res.status(200).json(resData);
        }
      );
    }
  );
});
app.post('/saveTodo', (req, res) => {
  const userInfo = req.body.userInfo;
  const dateFormat = req.body.dateFormat;
  const todoList = req.body.setTodos;
  connection.query(
    'DELETE FROM todo_list WHERE todo_user_id = ? AND todo_date = ?',
    [userInfo.user_id, dateFormat],
    (err, results, fields) => {
      if (err) throw err;
      for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        connection.query(
          'INSERT INTO todo_list (todo_id, todo_title, todo_checked, todo_date, todo_user_id)VALUES(?, ?, ?, ?, ?)',
          [todo.id, todo.title, todo.checked, dateFormat, userInfo.user_id],
          (err, results, fields) => {
            if (err) throw err;
          }
        );
      }
      res.status(200).send('저장이완료 되었습니다.');
    }
  );
});
app.use((req, res) => {
  res.status(404).send('페이지를 찾을 수 없습니다.');
});
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
