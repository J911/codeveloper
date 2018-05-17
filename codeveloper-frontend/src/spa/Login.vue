<template>
  <div id="login">
    <app-nav />
    <article>
        <div class="login-wrapper">
            <h1>
                <span class="brand">codeveloper</span>
                <i class="fas fa-heart"></i>
                <i class="fab fa-github"></i>
                Github
            </h1>
            <p>{{ ko.LOGIN_INTRODUCE }}</p>
            
            <a href="/auth/github">
                <i class="fab fa-github"></i> {{ ko.LOGIN_TEXT }}
            </a>
            
        </div>
    </article>
    <footer>
        <a class="github" href="https://github.com/J911" target="_blank"><i class="fab fa-github"></i> J911</a>
    </footer>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import * as lang from '../locale'

export default {
  name: 'Login',
  components: {
      'app-nav': Nav
  },
  computed: {
    ko() {
        return lang.ko
    }
  }
}
</script>

<style src="../style/spa/Login.css" scoped></style>
