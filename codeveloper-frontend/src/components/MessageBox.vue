<template>
  <div v-if="show" class="messageBox">
    <h1 class="header">
        {{ title }}
    </h1>
    <hr>
    <p class="message">
        {{ contents }}
    </p>
    <button @click="hideMessageBox">
        {{ locale.OKAY_TEXT }}
    </button>
  </div>
</template>

<script>
import * as lang from '../locale'

export default {
    computed: {
        show() {
            return this.$store.state.messageBox.show
        },
        title() {
            return this.$store.state.messageBox.title
        },
        contents() {
            return this.$store.state.messageBox.contents
        },
        locale() {
            return lang.ko
        }
    },
    methods: {
        hideMessageBox() {
            this.$store.commit("HIDE_MESSAGE_BOX")
        }
    }
}
</script>

<style src="../style/component/MessageBox.css" scoped></style>
