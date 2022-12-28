<template>
  <div class="container">
    <slot name="icon"></slot>
    <slot name="metric-count"></slot>
    <slot name="metric"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 13rem;
  /* height: 15rem; */
  background: white;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 2rem;
  padding: 2rem;
}

.icon {
  display: block;
  margin-bottom: 1rem;
}

.metric-count {
  font-size: 2.4rem;
  color: #3939ed;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
