<template>
  <div id="home">
    <app-nav />
    <article>
        <div class="login-wrapper">
            <h3>Sign In</h3>
            <form action="" class="login-form">
                <label for="uid">Username or email address</label>
                <input type="text" id="uid" >
                <label for="upw">Password</label>
                <input type="password" id="upw" >
                <button>로그인</button>
            </form>
            
        </div>
        <div class="join-wrapper">
            <h3>아직 계정이 없으세요?</h3>
            <form action="" class="join-form"></form>
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
        padding: 20px;
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
    }
    .login-wrapper, .join-wrapper  {
        width: 40%;
        margin: 0 20px;
        text-align: center;
        display: inline-block;
        max-width: 400px;
        min-width: 300px;
        vertical-align: top;
    }
    .login-wrapper form.login-form, .join-wrapper form.join-form {
        text-align: left;
        border: 1px solid rgb(187, 187, 187);
        background-color: #fff;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 20px;
        height: 300px;
        width: 100%;
    }
    .login-wrapper form.login-form label {
        font-weight: 800;
    }
    .login-wrapper form.login-form input {
        display: block;
        width: 100%;
        height: 25px;
        border-radius: 3px;
        border: 1px solid rgb(177, 177, 177);
        margin: 5px 0 20px 0;
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
