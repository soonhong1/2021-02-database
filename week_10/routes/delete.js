import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/', async (req, res) => {  //완성된 주소 : localhost:3000/delete
    const department = await selectSql.getDepartment();
    const dept_locations = await selectSql.getDept_locations();

    res.render('delete', {  //각각 원하는 hbs 입력
        title: "삭제 기능",
        department,
        dept_locations  //이름을 바꿔도 무방
    });
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    console.log('delete router:', req.body.delBtn); //console을 이용해 확인

    const data = {
        Dnumber: req.body.delBtn
    };

    await deleteSql.deleteDepartment(data); //sql이랑도 연관되어 있다. 

    res.redirect('/delete'); //수정 후 select 페이지에 접속하면 수정되어 있다.
});

router.post('/dept_locations', async (req, res) => {
    console.log('delete router:', req.body.delBtn); //console을 이용해 확인
    
    const data = {
        Dlocation: req.body.delBtn
    };
    
    await deleteSql.deleteDept_locations(data); //sql이랑도 연관되어 있다. 
    
    res.redirect('/delete');
});

module.exports = router;