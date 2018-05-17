<template>
  <div v-if="registbox" class="registBox">
    <h1 class="header">
        Add Contributors
    </h1>
    <hr>
    <p class="message">
        {{ locale.INPUT_GITHUB_NAME }}
    </p>
    <input type="text" v-model="github">
    <button @click="addContributor">
        {{ locale.ADD_TEXT }}
    </button>
  </div>
</template>
<script>
import * as lang from '../locale'

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
        },
        locale() {
            return lang.ko
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

<style src="../style/component/RegistBox.css" scoped></style>
