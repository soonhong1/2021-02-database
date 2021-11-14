import express from "express";
import { selectSql } from "../database/sql"; // selectSql 모듈을 사용

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {  //post로 보내므로 post로 입력
    const vars = req.body; // localhost에서 보낸 정보가 저장되는 위치
    const users = await selectSql.getUsers(); // 데이터베이스에서 users 정보 가져옴
    let whoAmI = ''; //admin인지 user인지 확인
    let checkLogin = false; // 처음에는 로그인을 안 하므로

    //for(let i=0; i < users.length; i++) {
    //    console.log('for loop', users[i].Id);   
    //}

    //admin인지 user인지 확인
    users.map((user)=> { // 함수를 받아서 하나씩 기능한다. 간략하게 사용가능
        if (vars.id === user.Id && vars.password === user.Password) { //필드에 따라 대문자 사용
            checkLogin = true;
            if (vars.id === 'admin') {
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })

    console.log('whoAmI:', whoAmI);

    //delete, select로 보내는 방법
    if (checkLogin && whoAmI === 'admin') {
        res.redirect('/delete');
    } else if (checkLogin && whoAmI === 'user') {
        res.redirect('/select');
    } else {
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router;