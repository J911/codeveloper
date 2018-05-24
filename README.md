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
## 빌드 가이드

### npm install
```
$ cd codeveloper-frontend
$ npm install

$ cd codeveloper-backend
$ npm install
```

### setting database
```
$ mysql -u root -p 
mariaDB [(none)]  > create database codeveloper;
mariaDB [(none)]  > use codeveloper
mariaDB [codeveloper]  > source "codeveloper.sql";
```

### setting backend
```
$ cd codeveloper-backend
$ cp .env_sample .env
$ vi .env // env 수정
$ mkdir uploads // init folder
```

### build frontend
```
$ cd codeveloper-frontend
$ npm run build
```

### make docker image 
```
$ cd codeveloper-backend/src/docker/dockerfile
$ docker build --tag terminal:node .
```

### run codeveloper
```
$ cd codeveloper-backend
$ node index.js
enjoy codeveloper 🙌
```

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
- [개발기](https://www.slideshare.net/ssuser827c0b/codeveloper-98231390)

## 데모 영상
- [Youtube](https://youtu.be/lpQRb---oGI)

## 라이센스
GNU General Public License v3.0
