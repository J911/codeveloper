<template>
  <div id="IDE">
    <img :src="user.avatar" :alt="user.name">
    <span>hello {{ user.name }}</span>
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

