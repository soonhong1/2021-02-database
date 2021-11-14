import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home"; // 상위폴더로 이동한 후 원하는 파일 설정
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000;

const app = express(); // app이라는 객체로 express 기능을 사용. 밑에 내용은 주석 필요 X

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', homeRouter);
app.use('/update', updateRouter);
app.use('/select', selectRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})