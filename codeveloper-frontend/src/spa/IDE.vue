<template>
  <div id="IDE">
    <nav>
      <ul class="menu">
        <li class="item">
          <div class="profile">
            <img :src="user.avatar" :alt="user.name">
            <span>{{ user.name }}</span>
          </div>
        </li>
        <li class="item">
          <a href="/auth/logout">
            <span class="logout">
              <i class="fas fa-sign-out-alt"></i>
              sign out
            </span>
          </a>
        </li>
      </ul> 
    </nav>
    <div class="explorer">
      <div class="header">
        EXPLORER
      </div>
      <ul class="files">
        <li class="header">
          My Files
        </li>
        <li class="item">

        </li>
      </ul>
    </div>
    <div class="editor">
       <codemirror ref="myCm"
              :value="code" 
              :options="cmOptions"
              @ready="onCmReady"
              @focus="onCmFocus"
              @input="onCmCodeChange">
      </codemirror>
    </div>
  </div>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'

export default {
  name: 'IDE',
  data () {
    return {
      user: {
        name: undefined,
        avatar: undefined
      },
      code: '',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      }
    }
  },
  created() {
    this.fetchUserDate();
  },
  methods: {
    fetchUserDate() {
      const baseURI = '/user';
      this.$http.get(`${baseURI}`)
      .then((result) => {
        //statusCode 비교가 필요함.
        this.user = result.data.user
      })
    },
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed : {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>

<style scope>
  a {
    text-decoration: none;
    color: rgb(235, 235, 235);
  }
  nav {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #3c3c3c;
    box-shadow: 0 0 10px #060505;
    z-index: 999;
  }
  nav ul.menu{
    float: right;
    list-style: none;
    margin: 0 20px;
  }
  nav ul.menu li.item {
    display: inline-block;
    color: rgb(235, 235, 235);
    margin: 0 10px;
    cursor: pointer;
  }
  nav .profile img {
    height: 30px;
    border-radius: 6px;
    margin: 5px 5px 5px 20px;
  }
  nav span {
    vertical-align: 70%;
  }
  .explorer {
    position: absolute;
    top: 40px;
    left: 0;
    bottom: 0;
    display: inline-block;
    width: 20%;
    background-color: #252526;
    z-index: 999;
    color: rgb(199, 199, 199);

  }
  .explorer > .header {
    padding: 20px;

  }
  .explorer ul.files {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .explorer ul.files li {
    height: 30px;
    line-height: 30px;
  }
  .explorer ul.files li.header {
    background-color: #3c3c3c;
    padding-left: 20px;
    font-weight: 800;

  }
  .editor {
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 0;
    display: inline-block;
    width: 80%;
    background-color: #151515;
  }
  .CodeMirror {
    height: auto;
  }
</style>
