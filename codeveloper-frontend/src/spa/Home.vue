<template>
  <div id="home">
    <app-nav />
    <header>
        <h1>
            당신의 팀과 co-develop하세요!
        </h1>
        <p><b>codeveloper.io</b>는 실시간 협업코딩 솔루션입니다.</p>
        <div class="btn-group">
            <router-link to="login"><button> <i class="fa fa-code"></i> start code</button></router-link>
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
                <li class="item" v-for="(lang, index) in languages" :key="index">
                    <span class="icon" 
                        v-html="lang.icon ? `<i class='${lang.icon}'></i>` :
                         lang.language">   
                    </span> 
                    <p>{{ lang.text }}</p>
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
      languages: [
          {
              icon: null,
              language: 'C',
              text: 'C Language'
          },
          {
              icon: 'fab fa-node-js',
              language: 'Node Js',
              text: 'Node Js'
          },
          {
              icon: 'fab fa-python',
              language: 'Python',
              text: 'Python'
          },
      ]
    }
  }
}
</script>

<style src="./Home.css" scoped></style>
