<template>
  <div id="ingredients-selector">
    <button
      v-bind:id="ingredient"
      v-for="ingredient in ingredients"
      v-bind:key="ingredient"
      v-on:click="$emit('toggleIngredient', ingredient)"
      v-bind:class="computeButtonClass(ingredient)"
    >
      {{ ingredient }}
    </button>
  </div>
</template>

<script>
import { ingredients } from "@/common/ingredients.js";

export default {
  props: {
    selectedIngredients: {
      type: Array,
    },
  },
  data() {
    return {
      ingredients: ingredients,
    };
  },
  methods: {
    computeButtonClass: function (ingredient) {
      return {
        selected: this.selectedIngredients.includes(ingredient),
      };
    },
  },
};
</script>

<style scoped>
.selected {
  background-color: black;
  border-color: black;
}
.selected:hover {
  background-color: #444444;
}
</style>