import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {  // 앞 /은 /select를 생략해서 입력
    const department = await selectSql.getDepartment(); // 불러와서 저장
    const dept_locations = await selectSql.getDept_locations();

    res.render('select', {  //select.hbs와 연동
        title: 'IT 공대',
        title2: '위치',
        department,
        dept_locations
    });
});

module.exports = router;