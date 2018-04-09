<template>
  <div id="IDE">
    <img :src="user.user_avatar" :alt="user.user_name">
    <span>hello {{ user.user_name }}</span>
  </div>
</template>

<script>
export default {
  name: 'IDE',
  data () {
    return {
      user: {
        user_name: "Jay",
        user_avatar: "https://avatars0.githubusercontent.com/u/34212724?v=4"
      }
    }
  }
}
</script>

