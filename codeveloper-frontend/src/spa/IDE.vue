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
          <span class="logout">
            <i class="fas fa-sign-out-alt"></i>
            sign out
          </span>
        </li>
      </ul>
      
    </nav>
    <div class="explorer">

    </div>
    <div class="editor">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'IDE',
  data () {
    return {
      user: {
        name: undefined,
        avatar: undefined
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
    }
  }
}
</script>

<style scope>
  nav {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #3c3c3c;
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
  }
  .editor {
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 0;
    display: inline-block;
    width: 80%;
    background-color: #1e1e1e;
  }
</style>
