<template>
  <div id="review-container">
    <span><i>Our top rated recipes!</i></span>
    <recipe-card
      v-for="(recipe, index) in orderedRecipes"
      v-bind:key="index"
      v-bind:recipe="recipe"
    />
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  components: {
    "recipe-card": RecipeCard,
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    orderedRecipes() {
      return this.recipes.slice(0).sort(function (recipe1, recipe2) {
        return recipe2.num_like - recipe1.num_like;
      });
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