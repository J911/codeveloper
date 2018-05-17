<template>
    <div id="nav">
        <nav>
            <router-link class="brand" to="/">codeveloper</router-link>
            <ul class="menu">
                <a href="/#introduce">
                    <li class="item">
                        {{ locale.CODEVELOPER_TEXT }}
                    </li>
                </a>
                <li class="item">
                    {{ locale.INTRODUCE_DEVELOPER }}
                </li>
                <router-link to="login">
                    <li class="item">
                        {{ locale.START_TEXT }}
                    </li>
                </router-link>
            </ul>
        </nav>
    </div>
  
</template>
<script>
import * as lang from '../locale'

export default {
    computed: {
        locale() {
            return lang.ko
        }
    }
}
</script>
<style src="../style/component/Nav.css" scoped></style>
