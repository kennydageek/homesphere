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
  padding: 0.7rem 1.5rem;
  background-color: rgb(57, 57, 237);
  border: 1px solid rgb(57, 57, 237);
  border-radius: 1rem;
  color: white;
  cursor: pointer;
}
</style>
