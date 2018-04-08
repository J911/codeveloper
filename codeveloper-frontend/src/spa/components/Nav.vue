<template>
    <div id="nav">
        <nav>
            <a class="brand" href="/">codeveloper.io</a>
            <ul class="menu">
                <li class="item">
                    introduce
                </li>
                <li class="item">
                    developer
                </li>
                <li class="item">
                    sign in
                </li>
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
}
nav ul.menu li.item {
    display: inline-block;
    padding: 0 15px;
    cursor: pointer;
}
</style>
