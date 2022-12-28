<template>
  <div class="home">
    <header class="header">
      <h1 class="heading__primary">Real Estate advice for real locals.</h1>

      <p class="heading__subtitle">
        In expecting display, thought. Rationally and at it's of headline proper
        than met harmonics; sign the had no made reached are desk mars might to
        first.
      </p>

      <hs-button>Get Started</hs-button>
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
  /* color: white; */
  /* z-index: -1; */
}

.heading__primary {
  font-size: 4rem;
  color: white;
  margin-bottom: 2rem;
  width: 40rem;
}

.heading__subtitle {
  color: white;
  font-size: 1.4rem;
  margin-bottom: 3rem;
  width: 40rem;
  line-height: 1.5;
}
</style>
