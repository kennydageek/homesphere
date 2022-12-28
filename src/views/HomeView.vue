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
    <div class="stat-card">
      <hs-stat-card>
        <template #icon> <HomeIcon fillColor="#3939ed" /></template>
        <template #metric-count>
          <p class="metric-count">50k</p>
        </template>
        <template #metric>
          <p class="metric">Satisfied customers</p>
        </template>
      </hs-stat-card>

      <hs-stat-card>
        <template #icon>
          <EmoticonHappyOutlineIcon fillColor="#3939ed"
        /></template>
        <template #metric-count>
          <p class="metric-count">90%</p>
        </template>
        <template #metric>
          <p class="metric">Already inhabited</p>
        </template>
      </hs-stat-card>
    </div>
  </div>
</template>

<script>
import HsStatCard from '../components/HsStatCard.vue';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import EmoticonHappyOutlineIcon from 'vue-material-design-icons/EmoticonHappyOutline';

export default {
  name: 'HomeView',
  components: {
    HsStatCard,
    HomeIcon,
    EmoticonHappyOutlineIcon,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  /* height: 76rem; */
  border-radius: 0% 0% 100% 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(100% 0, 100% 63%, 73% 100%, 0 77%, 0 0);
  top: 0;
  padding: 20rem 15rem;
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

.stat-card {
  display: flex;
  justify-content: center;
  position: relative;
  top: -13rem;
  left: 50%;
  transform: translateX(-50%);
  gap: 2rem;
}

.icon {
  display: block;
  margin-bottom: 2rem;
}

.metric-count {
  font-size: 2.4rem;
  color: #3939ed;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
