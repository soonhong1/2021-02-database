import express from "express";
import logger from "morgan";
import path from "path";

import loginRouter from "../routes/login"; // 상위폴더로 이동한 후 원하는 파일 설정
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";

const PORT = 3000;

const app = express(); // app이라는 객체로 express 기능을 사용. 밑에 내용은 주석 필요 X

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})