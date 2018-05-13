<template>
  <div v-if="messagebox" class="messageBox">
    <h1 class="header">
        {{ title }}
    </h1>
    <hr>
    <p class="message">
        {{ contents }}
    </p>
    <button @click="hideMessageBox">
        확인
    </button>
  </div>
</template>
<script>
export default {
    computed: {
        messagebox() {
            return this.$store.state.env.messagebox
        },
        title() {
            return this.$store.state.message.title
        },
        contents() {
            return this.$store.state.message.contents
        }
    },
    methods: {
        hideMessageBox() {
            this.$store.commit("HIDE_MESSAGE_BOX")
        }
    }
}
</script>

<style src="./MessageBox.css" scoped></style>
