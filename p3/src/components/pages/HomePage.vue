<template>
  <div id="home-page">
    <search-bar v-bind:recipes="recipes" v-on:update-recipes="loadRecipes" />
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
  methods: {
    loadRecipes() {
      this.$emit("update-recipes");
    },
  },
};
</script>

<style>
</style>