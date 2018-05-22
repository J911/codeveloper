# codeveloper
Codeveloper - 당신의 팀과 co-develop하세요!

## 읽는법
코드벨로퍼, 코디벨로퍼와 같이 어떻게 이름을 읽어야할지 햇갈리는 경우가 있는데 **코드벨로퍼**라고 읽으면 됩니다.

## 코드벨로퍼
![CODEVELOPER](https://i.imgur.com/ff3JwFs.png)
코드벨로퍼는 웹 기반 IDE에디터로, 소켓 통신을 통해 여러사람이 동시에 작업할 수 있습니다.

## 오픈소스 프로젝트
모든 코드를 레파지토리에 공유합니다. 라이센스에 기반하여 마음껏 가져다 쓰셔도 됩니다.
~~*(이 코드들도 다 오픈소스로 만들어서)*~~
## build

### npm install
1. $ cd codeveloper-frontend
2. $ npm install
3. $ cd ../codeveloper-backend
4. $ npm install

### setting database
1. $ mysql -u root -p 
2. mariaDB [(none)]  > create database codeveloper;
3. mariaDB [(none)]  > use codeveloper
4. mariaDB [(none)]  > source "codeveloper.sql";

### setting backend
1. $ cd codeveloper-backend
2. $ cp .env_sample .env
3. $ vi .env // env 수정
4. $ mkdir uploads // init folder

### build frontend
1. $ cd codeveloper-frontend
2. $ npm run build

### run codeveloper
1. $ cd codeveloper-backend
2. $ node index.js
3. enjoy codeveloper 🙌

## Stack

### backend
- Node Js
- Express Js
- Mysql
- Socket.io
- Docker

### frontend
- Vue Js
- Webpack3
- CodeMirror
- FontAswome
- Axios
- Vuex

## 소개 Slide
- [개발 계획](https://www.slideshare.net/ssuser827c0b/codeveloper)
- [개발기](https://www.slideshare.net/ssuser827c0b/codeveloper-97872633)

## 라이센스
GNU General Public License v3.0
