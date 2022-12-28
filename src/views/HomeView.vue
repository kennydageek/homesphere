<template>
  <div class="home">
    <header class="header">
      <h1 class="heading__primary">Real Estate advice for real locals.</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 76rem;
  border-radius: 0% 0% 100% 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(100% 0, 100% 63%, 73% 100%, 0 77%, 0 0);
  /* position: absolute; */
  top: 0;
  padding: 20rem 15rem;
  /* z-index: -1; */
}
</style>
