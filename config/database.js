const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'elog.coxw7tocd83k.ap-northeast-2.rds.amazonaws.com',
    user: 'simparkhada',
    port: '3306',
    password: 'Simparkhada1!',
    database: 'elog'
});

module.exports = {
    pool: pool
};