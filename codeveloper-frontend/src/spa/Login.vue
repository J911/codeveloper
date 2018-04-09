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

<style scoped>
    hr {
        width: 30px;
        margin: 20px auto;
        border: 2px solid rgb(248, 107, 107); 
    }
    
    article {
        position: absolute;
        padding: 20px;
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        height: 152px;
        top: 20%;        
    }
    .login-wrapper {
        width: 40%;
        margin: 0 20px;
        text-align: center;
        display: inline-block;
        max-width: 400px;
        min-width: 300px;
        vertical-align: top;
    }
    .login-wrapper span.brand {
        color: #000;
        font-family: 'Oswald', sans-serif;
    }
    .login-wrapper .fa-heart {
        color: rgb(255, 96, 123);
    }
    .login-wrapper a {
        margin: 0 auto;
        text-decoration: none;
        display: block;
        line-height: 40px;
        width: 300px;
        height: 40px;
        font-size: 1rem;
        border: none;
        border-radius: 3px;
        box-shadow: 0 0 10px gray;
        font-weight: 600;
        background-color: rgb(251, 251, 251);
        color: rgb(72, 72, 72);
    }
    .login-wrapper a:focus {
        outline: none;
    }
    .login-wrapper a:active {
        background-color: rgb(230, 230, 230);
    }
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        font-weight: 800;
        padding: 20px 0;
    }
    footer a.github {
        color: black;
        text-decoration: none;
    }
</style>
