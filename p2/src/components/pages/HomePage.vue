<template>
  <div id="home-page">
    <search-bar v-bind:recipes="recipes" />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  props: {
    recipes: {
      type: Array,
    },
  },
  components: {
    "search-bar": Search,
  },
};
</script>

<style>
</style>