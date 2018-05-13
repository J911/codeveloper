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
            return this.$store.state.env.registbox
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
                    return this.$store.commit('SHOW_MESSAGE_BOX', {contents:'이미 추가된 멤버입니다.'})
                }
            }
            this.$store.dispatch('ADD_CONTRIBUTOR', this.github)
            this.github = ''
        }
    }
}
</script>

<style src="./RegistBox.css" scoped></style>
