<template>
  <nav class="nav">
    <div class="nav">
      <p class="nav-logo">
        <router-link :to="{ name: 'home' }">Homesphere</router-link>
      </p>
      <div class="nav-links">
        <ul v-for="link in links" :key="link.text">
          <li>
            <router-link :to="link.route">{{ link.text }} </router-link>
          </li>
        </ul>
      </div>
    </div>

    <router-link :to="{ name: 'home' }">
      <hs-button>Contact Us</hs-button>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'How it Works',
          route: '/howitworks',
        },
        {
          text: 'Features',
          route: '/features',
        },
        {
          text: 'About',
          route: '/about',
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  gap: 7rem;
}

.nav-logo {
  align-self: center;
  font-size: 3rem;
  font-weight: 600;
  /* width: 10%; */
}

.nav-logo a {
  /* color: #2b2a1f; */
  /* transition: col; */
}

.nav-logo a:hover {
  /* color: #2b2a1f; */
  color: white;
}

.nav-links {
  /* background: red; */
  display: flex;
  align-self: center;
  gap: 5rem;
  width: 60%;
}

.nav-links li {
  list-style: none;
  font-weight: 500;
  font-size: 1.4rem;
}
</style>
