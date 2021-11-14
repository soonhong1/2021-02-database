import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {  // 앞 /은 /select를 생략해서 입력
    const employee = await selectSql.getEmployee();  // 불러와서 저장
    const department = await selectSql.getDepartment();

    res.render('select', {  //select.hbs와 연동
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;