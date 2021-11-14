import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/employee', async (req, res) => {  //완성된 주소 : localhost:3000/update/employee
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {  //각각 원하는 hbs 입력
        title: "직원 테이블 갱신",
        emp_res  //이름을 바꿔도 무방
    });
});

// 기존의 입력 값 불러오기
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    })
});

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/employee', async (req, res) => {  // post로 넘겨주므로 위에 get만 작성하면 안된다. 
    await updateSql.updateEmployee();

    res.redirect('/select');
});

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body;
    console.log(vars.dname); //console을 이용해 확인

    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data); //sql이랑도 연관되어 있다. 

    res.redirect('/select'); //수정 후 select 페이지에 접속하면 수정되어 있다.
});

module.exports = router;