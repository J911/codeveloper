<template>
    <div id="nav">
        <nav>
            <router-link class="brand" to="/">codeveloper.io</router-link>
            <ul class="menu">
                <li class="item">
                    코드벨로퍼
                </li>
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

<style scoped>
nav {
    height: 30px;
    line-height: 30px;
    padding: 10px 20px;
}
nav a.brand {
    color: #000;
    text-decoration: none;
    font-family: 'Oswald', sans-serif;
    float: left;
}
nav ul.menu {
    float: right;
    margin: 0;
}
nav ul.menu li.item {
    display: inline-block;
    padding: 0 15px;
    cursor: pointer;
    font-weight: 400;
    color:rgb(52, 52, 52);
}
nav ul.menu li.item:hover {
    color: rgb(232, 119, 119);
    transition: .2s all;
}
</style>
