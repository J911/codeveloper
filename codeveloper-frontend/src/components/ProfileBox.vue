<template>
  <div v-if="profilebox" class="profileBox">
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
        profilebox() {
            return this.$store.state.env.profilebox.active
        },
        contributor() {
            return this.$store.state.contributors[this.$store.state.profilebox.contributor]
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
