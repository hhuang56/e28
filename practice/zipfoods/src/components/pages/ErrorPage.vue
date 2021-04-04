<template>
  <div id="error-page">
    <h1>Product {{ id }} not found</h1>
    <p></p>
    <h2>
      Return to <router-link v-bind:to="'/products'">Products</router-link> Page
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
};
</script>

<style>
#error-page {
  justify-content: center;
  text-align: center;
}
</style>