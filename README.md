# 2021-02-database

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:soonhong1/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/soonhong1/2021-02-database.git

2. week_3 폴더로 이동
    > cd week_3

3. 콘솔창(powershell)에서 npm package 설치
    > npm install

4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'hw1',
    password: '1q2w3e4r1!',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
</code>
</pre>

5. 서버 설정 (powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력

6. 기본 확인
    - localhost:3000으로 들어가면 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000/user 로 들어가면 DB에 있는 값을 클릭해서 출력

## 8주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:soonhong1/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/soonhong1/2021-02-database.git

2. week_8 폴더로 이동
    > cd week_8

3. 콘솔창(powershell)에서 npm package 설치
    > npm install
    
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week8', 
    password: '1q2w3e4r1!',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
</code>
</pre>

5. 서버 설정 (powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력

6. 데이터 삽입
    - Employee 데이터 삽입
        > 두 테이블간의 관계를 고려하면 직원 데이터부터 입력해야 함(/select로 접근하여 결과 확인)
    - Department 데이터 삽입
        > 직원 데이터가 존재하면(Ssn을 참조하기 때문에) 부서 데이터 입력 가능

7. 데이터 수정 및 결과 확인
    - 주소창에 localhost:3000/update/department 입력

## 10주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:soonhong1/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/soonhong1/2021-02-database.git

2. week_10 폴더로 이동
    > cd week_10

3. 콘솔창(powershell)에서 npm package 설치
    > npm install

4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
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
</code>
</pre>

5. 서버 설정 (powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
    - DB에 저장된 유저 정보 확인
        > Admin 계정 또는 user 계정
    - 로그인 성공 시 화면 이동
    - 로그인 실패 시 경고 창 팝업

6. 데이터 조회
    - 주소창에 localhost:3000/select 입력

7. 데이터 삭제
    - 주소창에 localhost:3000/delete 입력
    - 삭제 버튼을 클릭하여 해당 row 데이터 삭제 

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.
