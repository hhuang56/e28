<template>
  <div id="home-page">
    <search-bar />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  components: {
    "search-bar": Search,
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
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