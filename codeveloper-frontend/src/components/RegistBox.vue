<template>
  <div v-if="registbox" class="registBox">
    <h1 class="header">
        Add Contributors
    </h1>
    <hr>
    <p class="message">
        Github이름을 입력해주세요
    </p>
    <input type="text" v-model="github">
    <button @click="addContributor">
        추가
    </button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            github: ''
        }
    },
    computed: {
        registbox() {
            return this.$store.state.registbox
        },
        contributors() {
            return this.$store.state.contributors
        }
    },
    methods: {
        hideRegistbox() {
            this.$store.commit("HIDE_REGIST_BOX")
        },
        addContributor() {
            this.hideRegistbox()
            for(let n in this.contributors){
                if(this.contributors[n].user_name == this.github){
                    this.github = ''
                    return this.$store.commit('SHOW_MESSAGE_BOX', {contents:'이미 추가된 멤버입니다'})
                }
            }
            this.$store.dispatch('ADD_CONTRIBUTOR', this.github)
            this.github = ''
        }
    }
}
</script>

<style scoped>
    .registBox {
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
    .registBox h1 {
        font-size: 1.4rem;
        margin: 0;
        color: rgb(31, 30, 30);
    }
    .registBox p {
        text-align: center;
        font-size: 1.2rem;
    }
    .registBox input {
        display: block;
        width: 200px;
        height: 30px;
        font-weight: 800;
        font-size: 1.2rem;
        border: 1px solid rgb(221, 221, 221);
        background-color: rgb(245, 245, 245);
        border-radius: 3px;
        margin: 20px auto;
        text-align: center;
    }
    .registBox input:focus {
        outline: none;
    }
    .registBox hr {
        border: 0;
        border-bottom: 1px solid rgb(122, 122, 122);
    }
    .registBox button {
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
    .registBox button:focus {
        outline: none;
    }
    .registBox button:active {
        background-color: rgb(39, 133, 39);
    }
</style>
