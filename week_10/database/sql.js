import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10', 
    password: '1q2w3e4r1!',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

// async / await 사용
const promisePool = pool.promise();

// selec query
export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);

        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
    getDept_locations : async () => {
        const [rows] = await promisePool.query(`select * from dept_locations`);

        return rows
    },
}

// delete query
export const deleteSql = {  //외부에서 함수를 사용하기 위해 export를 쓴다
    deleteDepartment : async (data) => {
        console.log('deleteSql.deleteDepartment:', data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`;
        
        await promisePool.query(sql);
    },
    deleteDept_locations : async (data) => {
        console.log('deleteSql.deleteDept_locations:', data.Dlocation);
        const sql = `delete from dept_locations where Dlocation=${data.Dlocation}`;
        
        await promisePool.query(sql);
    },
}