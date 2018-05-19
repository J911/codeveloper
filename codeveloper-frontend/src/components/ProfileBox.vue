<template>
  <div v-if="show" class="profileBox">
    <img :src="contributor.user_avatar" :alt="contributor.user_name" class="profileImage">
    <p class="profile">
        {{ contributor.user_name }}
    </p>
    <button @click="hideProfileBox">
        {{ locale.CLOSE_TEXT }}
    </button>
  </div>
</template>
<script>
import * as lang from '../locale'

export default {
    props: [
        'contributorIdx'
    ],
    computed: {
        show() {
            return this.$store.state.profileBox.show
        },
        contributor() {
            const contributorIdx = this.$store.state.profileBox.contributorIdx
            return this.$store.state.contributors[contributorIdx]
        },
        locale() {
            return lang.ko
        }
    },
    methods: {
        hideProfileBox() {
            this.$store.commit("HIDE_PROFILE_BOX")
        }
    }
}
</script>

<style src="../style/component/ProfileBox.css" scoped></style>
