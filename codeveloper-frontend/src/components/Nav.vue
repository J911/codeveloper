<template>
    <div id="nav">
        <nav>
            <router-link class="brand" to="/">codeveloper</router-link>
            <ul class="menu">
                <a href="/#introduce">
                    <li class="item">
                        코드벨로퍼
                    </li>
                </a>
                <li class="item">
                    개발자 소개
                </li>
                <router-link to="login">
                    <li class="item">
                        시작하기
                    </li>
                </router-link>
            </ul>
        </nav>
    </div>
  
</template>

<style src="../style/component/Nav.css" scoped></style>
