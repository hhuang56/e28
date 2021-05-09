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
    />
  </div>
  <div v-if="searchResults.length === 0 && selectedIngredients.length > 0">
    <p><i>No results returned for your search.</i></p>
  </div>
</template>

<script>
import { ingredients } from "@/common/ingredients.js";
import RecipeCard from "@/components/RecipeCard.vue";
import IngredientButtons from "@/components/IngredientButtons.vue";

export default {
  components: {
    "recipe-card": RecipeCard,
    "ingredient-buttons": IngredientButtons,
  },
  data() {
    return {
      ingredients: ingredients,
      errors: null,
      showConfirmation: false,
      selectedIngredients: [],
    };
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    searchResults() {
      return this.$store.getters.search(this.selectedIngredients);
    },
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