<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
    <router-view/>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul{
  list-style: none;
}
.main{
  float: left;
  width: 90%;
  background-color: #eff2f7;
  height: 100%;
  overflow: hidden;
}
</style>
