const express = require('express');
const cors = require('cors'); 
const userRoutes = require('./routes/userRoutes');
require('dotenv').config(); // 같은 폴더의 .env를 읽음

const app = express();
const port = process.env.PORT || 3001;

// 미들웨어 설정
app.use(cors()); // 프론트엔드(3000번)에서 오는 요청 허용
app.use(express.json()); // JSON 데이터 해석

app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send('Cupidity Backend Server is running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});