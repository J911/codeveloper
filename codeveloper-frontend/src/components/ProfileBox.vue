<template>
  <div v-if="profilebox" class="profileBox">
    <img :src="contributor.user_avatar" :alt="contributor.user_name">
    <p class="profile">
        {{ contributor.user_name }}
    </p>
    <button @click="hideProfileBox">
        확인
    </button>
  </div>
</template>
<script>
export default {
    props: [
        'contributorIdx'
    ],
    computed: {
        profilebox() {
            return this.$store.state.profileBox
        },
        contributor() {
            return this.$store.state.contributors[this.contributorIdx]
        }
    },
    methods: {
        hideProfileBox() {
            this.$store.commit("HIDE_PROFILE_BOX")
        }
    }
}
</script>

<style src="./ProfileBox.css" scoped></style>
