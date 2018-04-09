<template>
  <div id="home">
    <app-nav />
    <article>
        <div class="login-wrapper">
            <h1>
                <span class="brand">codeveloper</span>
                <i class="fas fa-heart"></i>
                <i class="fab fa-github"></i>
                Github
            </h1>
            <p>Github 계정만 있으면 바로 시작할 수 있습니다!</p>
            
            <a href="/auth/github">
                <i class="fab fa-github"></i> 로그인
            </a>
            
        </div>
    </article>
    <footer>
        <a class="github" href="https://github.com/J911" target="_blank"><i class="fab fa-github"></i> J911</a>
    </footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  name: 'Login',
  components: {
      'app-nav': Nav
  }
}
</script>

<style src="./Login.css" scoped></style>
