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
app.use((req, res) => {
  res.status(404).send('페이지를 찾을 수 없습니다.');
});
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
