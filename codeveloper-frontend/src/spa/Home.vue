<template>
  <div id="home">
    <app-nav />
    <header>
        <h1>
            {{ locale.CODEVELOPER_SLOGAN }}
        </h1>
        <p>{{ locale.CODEVELOPER_SHORT_INTRODUCE }}</p>
        <div class="btn-group">
            <router-link to="login"><button> <i class="fa fa-code"></i> start code</button></router-link>
            <a href="#introduce"><button class="gray">what the codeveloper</button></a>
        </div>
    </header>
    <article>
        <section id="introduce">
            <i class="fa fa-code"></i>
            <h1>codeveloper?</h1>
            <p>{{ locale.CODEVELOPER_INTRODUCE }}</p>
            <p>{{ locale.CODEVELOPER_CONTENTS }}</p>
        </section>
        <hr>
        <section id="language">
            <h1>{{ locale.CODEVELOPER_LANGUAGES }}</h1>
            <ul class="languages">
                <li class="item" v-for="(lang, index) in languages" :key="index">
                    <span class="icon" 
                        v-html="lang.icon ? `<i class='${lang.icon}'></i>` :
                         lang.language">   
                    </span> 
                    <p>{{ lang.text }}</p>
                </li>
            </ul>
            <p class="sub-contents">{{ locale.CODEVELOPER_NO_LANGUAGE }}</p>
        </section>
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
  },
  computed: {
    locale() {
        return lang.ko
    }
  }
}
</script>

<style src="../style/spa/Home.css" scoped></style>
