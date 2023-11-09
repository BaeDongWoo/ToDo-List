const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3005;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).send('안녕하세요! 이것은 간단한 Node.js 서버입니다.');
});

app.post('/login', (req, res) => {
  console.log(req.body.userId);
  const userId = req.body.userId;
  const password = req.body.password;
  if (userId === 'ehddn5410' && password === '1234') {
    res.status(200).send('확인');
  } else {
    res.status(200).send('실패');
  }
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
