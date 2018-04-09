<template>
    <div id="nav">
        <nav>
            <router-link class="brand" to="/">codeveloper.io</router-link>
            <ul class="menu">
                <li class="item">
                    introduce
                </li>
                <li class="item">
                    developer
                </li>
                <router-link to="login">
                    <li class="item">
                        sign in
                    </li>
                </router-link>
                
                <li class="item">
                    sign up
                </li>
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
    color:black;
}
</style>
