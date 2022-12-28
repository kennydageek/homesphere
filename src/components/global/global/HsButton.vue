<template>
  <div>
    <button><slot></slot></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  padding: 1rem 1.5rem;
  background-color: rgb(57, 57, 237);
  border: 1px solid rgb(57, 57, 237);
  border-radius: 2rem;
  color: white;
  cursor: pointer;
}
</style>
