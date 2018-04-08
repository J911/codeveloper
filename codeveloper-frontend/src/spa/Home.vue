<template>
  <div id="home">
    <app-nav />
    <header>
        <h1>
            당신의 팀과 co-develop하세요!
        </h1>
        <p><b>codeveloper.io</b>는 실시간 협업코딩 솔루션입니다.</p>
        <div class="btn-group">
            <button> <i class="fa fa-code"></i> start code</button>
            <button class="gray">what the codeveloper</button>
        </div>
    </header>
    <article>
        <section id="introduce">
            <i class="fa fa-code"></i>
            <h1>codeveloper?</h1>
            <p>codeveloper는 여러 그룹이 동시에 소스코드를 개발 및 수정 할 수 있도록 개발된 웹 IDE입니다.</p>
            <p>실시간 코드 동기화와 컴파일을 codeveloper에서 시작해보세요!</p>
        </section>
        <hr>
        <section id="language">
            <h1>현재 지원언어</h1>
            <ul class="languages">
                <li class="item">
                    <span class="icon">C</span> 
                    <p>C language</p>
                </li>
                <li class="item">
                    <span class="icon"><i class="fab fa-node-js"></i></span>
                    <p>Node Js</p>
                </li>
                <li class="item">
                    <span class="icon"><i class="fab fa-python"></i></span>
                    <p>Python</p>
                </li>
            </ul>
            <p class="sub-contents">원하는 언어가 없나요?</p>
        </section>
    </article>
    <footer>
        <a class="github" href="https://github.com/J911" target="_blank"><i class="fab fa-github"></i> J911</a>
    </footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  name: 'Home',
  components: {
      'app-nav': Nav
  },
  data () {
    return {
      msg: 'Welcome to Home Page'
    }
  }
}
</script>

<style scoped>
    hr {
        width: 30px;
        margin: 20px auto;
        border: 2px solid rgb(248, 107, 107); 
    }
    header {
        background-image: url('../assets/header_bg.png');
        background-position: center;
        text-align: center;
        padding: 100px 20px;
        color: #fff;
        height: 400px;
        box-sizing: border-box;
    }
    header h1 {
        line-height: 80px;
        font-size: 3rem;
        opacity: 0.9;
    }
    header p {
        opacity: 0.8;
    }
    header .btn-group {
        margin: 50px 0;
    }
    header button {
        width: 200px;
        height: 40px;
        font-size: 1rem;
        border: none;
        margin: 0 20px;
        font-weight: 600;
        background-color: rgb(220, 101, 101);
        border-radius: 3px;
        color: #fff;
        box-shadow: 0 0 10px rgb(106, 106, 106);
        cursor: pointer;
    }
    header button:active {
        background-color: rgb(218, 84, 84);
    }
    header button:focus {
        outline: none;
    }
    .gray {
        background-color: gray;
    }
    .gray:active {
        background-color: rgb(129, 118, 118);
    }
    article {
        padding: 20px;
    }
    article section {
        padding: 10px;
    }
    article section#introduce {
        text-align: center;
    }
    article section#language {
        text-align: center;
    }
    article section#introduce > i {
        font-size: 3rem;
    }
    article section#introduce h1 {
        line-height: 50px;
    }
    article section#language h1 {
        line-height: 50px;
    }
    article section#language ul.languages {
        padding: 20px 0;
        list-style: none;
    }
    article section#language ul.languages li.item {
        display: inline-block;
        padding: 0 20px;
    }
    span.icon {
        font-weight: 800;
        font-size: 2rem;
    }
    article section#language .sub-contents {
        font-size: 0.8rem;
        color: gray;
        cursor: pointer;
    }
    footer {
        text-align: center;
        font-weight: 800;
        padding: 20px 0;
    }
    footer a.github {
        color: black;
        text-decoration: none;
    }
</style>
