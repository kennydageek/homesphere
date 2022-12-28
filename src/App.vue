<template>
  <div id="app">
    <hs-nav-bar class="navigation-bar" />
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  font-size: 1.6rem;
}

a {
  text-decoration: none;
  color: #fff;
  transition: color 0.2s ease;
}

a:hover {
  color: #2b2a1f;
}

.navigation-bar {
  position: absolute;
  top: 3rem;
  width: 100%;
  padding: 0 15rem;
  /* background: blue; */
  z-index: 1;
}
</style>
