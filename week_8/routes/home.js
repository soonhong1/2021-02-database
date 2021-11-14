import express from "express";
import { insertSql } from "../database/sql"; // insertSql 모듈을 사용

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', (req, res) => {  //post로 보내므로 post로 입력
    const vars = req.body; // localhost에서 보낸 정보가 저장되는 위치
    const var_lenth = Object.keys(req.body).length;

    if (var_lenth > 4) {  // 넘어오는 갯수에 따라 employee, department에 잘 저장 
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
    } else {
        const data = {  //위는 if 문에서의 data이므로 상관없음
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/'); // 입력하고 어떤 페이지 갈 지 결정(새로고침)
})

module.exports = router;