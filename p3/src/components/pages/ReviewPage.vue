<template>
  <div id="review-container">
    <span><i>Our top rated recipes!</i></span>
    <recipe-card
      v-for="(recipe, index) in orderedRecipes"
      v-bind:key="index"
      v-bind:recipe="recipe"
      v-on:increment-num-like="incrementNumLike($event)"
      v-on:decrement-num-like="decrementNumLike($event)"
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
  methods: {
    incrementNumLike(recipeId) {
      console.log("incrementNumLike in ReviewPage called");

      let mutableRecipe = {
        ...this.recipes.filter((recipe) => {
          return recipe.id === recipeId;
        })[0],
      };
      mutableRecipe.num_like++;

      this.$store.dispatch("addFavorite", recipeId);
      this.$store.dispatch("updateRecipe", mutableRecipe);
    },
    decrementNumLike(recipeId) {
      console.log("decrementNumLike in ReviewPage called");

      let mutableRecipe = {
        ...this.recipes.filter((recipe) => {
          return recipe.id === recipeId;
        })[0],
      };
      mutableRecipe.num_like--;

      this.$store.dispatch("removeFavorite", recipeId);
      this.$store.dispatch("updateRecipe", mutableRecipe);
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