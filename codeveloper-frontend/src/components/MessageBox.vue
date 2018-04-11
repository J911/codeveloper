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
            return this.$store.state.messagebox
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

<style scoped>
    .messageBox {
        position: fixed;
        z-index: 99999;
        min-height: 100px;
        min-width: 400px;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -200px;
        background-color: #fff;

        border-radius: 3px;
        padding: 20px;
    }
    .messageBox h1 {
        font-size: 1.4rem;
        margin: 0;
        color: rgb(31, 30, 30);
    }
    .messageBox p {
        text-align: center;
        font-size: 1.2rem;
    }
    .messageBox hr {
        border: 0;
        border-bottom: 1px solid rgb(122, 122, 122);
    }
    .messageBox button {
        display: block;
        width: 100px;
        height: 30px;
        margin: 0 auto;
        border: none;
        background-color: rgb(48, 168, 48);
        border-radius: 3px;
        font-weight: 600;
        color: white;
        cursor: pointer;
    }
    .messageBox button:focus {
        outline: none;
    }
    .messageBox button:active {
        background-color: rgb(39, 133, 39);
    }
</style>
