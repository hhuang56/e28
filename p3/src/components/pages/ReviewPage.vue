<template>
  <div id="review-container">
    <span><i>Our top rated recipes!</i></span>
    <recipe-card
      v-for="(recipe, index) in orderedRecipes"
      v-bind:key="index"
      v-bind:recipe="recipe"
      v-on:increment-num-like="incrementNumLike($event)"
    />
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import { axios } from "@/common/app.js";

export default {
  props: {
    recipes: {
      type: Array,
    },
  },
  components: {
    "recipe-card": RecipeCard,
  },
  computed: {
    orderedRecipes() {
      return this.recipes.slice(0).sort(function (recipe1, recipe2) {
        return recipe2.num_like - recipe1.num_like;
      });
    },
  },
  methods: {
    incrementNumLike(id) {
      let mutableRecipe = {
        ...this.recipes.filter((recipe) => {
          return recipe.id === id;
        })[0],
      };
      mutableRecipe.num_like++;
      axios
        .put("/recipe/" + mutableRecipe.id, mutableRecipe)
        .then((response) => {
          if (response.data.errors) {
            console.error(response.data.errors);
          } else {
            this.$emit("update-recipes");
          }
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