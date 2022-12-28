<template>
  <div id="app">
    <hs-nav-bar class="navigation-bar" />
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: 'Poppins', sans-serif;
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
