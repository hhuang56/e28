<template>
  <div>
    <div id="selected-ingredients-display">
      <p>
        <i
          >Select the ingredients you want to use, and the recipe book will
          automatically match your selections.</i
        >
      </p>
    </div>
    <ingredient-buttons
      v-on:toggleIngredient="toggleIngredient($event)"
      v-bind:selectedIngredients="selectedIngredients"
    />
  </div>
  <div v-if="searchResults.length !== 0">
    <recipe-card
      v-for="(recipe, index) in searchResults"
      v-bind:key="index"
      v-bind:recipe="recipe"
      v-on:increment-num-like="incrementNumLike($event)"
    />
  </div>
  <div v-if="searchResults.length === 0">
    <p><i>No results returned for your search.</i></p>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import { ingredients } from "@/common/ingredients.js";
import RecipeCard from "@/components/RecipeCard.vue";
import IngredientButtons from "@/components/IngredientButtons.vue";

export default {
  props: {
    recipes: {
      type: Array,
    },
  },
  components: {
    "recipe-card": RecipeCard,
    "ingredient-buttons": IngredientButtons,
  },
  emits: ["update-recipes"],
  data() {
    return {
      ingredients: ingredients,
      errors: null,
      showConfirmation: false,
      selectedIngredients: [],
      searchResults: [],
    };
  },
  methods: {
    computeButtonClass: function (ingredient) {
      return {
        selected: this.selectedIngredients.includes(ingredient),
      };
    },
    toggleIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient);
      } else {
        this.selectedIngredients = this.selectedIngredients.filter((elem) => {
          return ingredient !== elem;
        });
      }
      this.searchResults = this.recipes.filter((recipe) => {
        if (this.selectedIngredients.length === 0) return false;
        const recipe_ingredients = recipe.key_ingredient.split(",");
        return recipe_ingredients.every((val) =>
          this.selectedIngredients.includes(val)
        );
      });
    },
    incrementNumLike(id) {
      let mutableRecipe = {
        ...this.recipes.filter((recipe) => {
          return recipe.id === id;
        })[0],
      };
      mutableRecipe.num_like++;

      this.searchResults = this.searchResults.map((recipe) => {
        if (recipe.id === id) {
          recipe.num_like++;
        }
        return recipe;
      });

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

<style scoped>
.selected {
  background-color: green;
  border-color: green;
}
.selected:hover {
  background-color: darkgreen;
}
#search-button {
  background-color: white;
  color: black;
  border: 2px solid black;
}
#search-button:hover {
  background-color: lightgray;
  color: black;
}
</style>