const mysql = require('mysql2');
const path = require('path');
// 현재 폴더(database)의 상위 폴더(backend)에 있는 .env를 찾음
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const conn = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

conn.connect((err) => {
    if (err) {
        console.error('DB 연결 실패:', err);
        // 디버깅용: 설정값이 제대로 들어오는지 확인 (나중에 지우세요)
        console.log('접속 정보:', {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            db: process.env.DB_NAME
        });
    } else {
        console.log('MySQL 데이터베이스 연결 성공! (mysql2)');
    }
});

module.exports = conn;