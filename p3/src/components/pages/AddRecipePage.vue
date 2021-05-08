<template>
  <div>
    <span
      ><i
        >Help contribute to the recipe book by submitting a new recipe.</i
      ></span
    >

    <div id="inputs">
      <label for="name">Name <span class="required">*</span></label>
      <input type="text" v-model="recipe.name" id="name" v-on:blur="validate" />

      <label for="description"
        >Description <span class="required">*</span></label
      >
      <input
        type="text"
        v-model="recipe.description"
        id="description"
        v-on:blur="validate"
      />

      <label for="instruction"
        >Instructions <span class="required">*</span></label
      >
      <input
        type="text"
        v-model="recipe.instruction"
        id="instruction"
        v-on:blur="validate"
      />

      <label for="key-ingredient"
        >Key Ingredients <span class="required">*</span></label
      >
      <ingredient-buttons
        v-on:toggleIngredient="toggleIngredient($event)"
        v-bind:selectedIngredients="selectedIngredients"
        v-on:blur="validate"
      />
    </div>

    <button v-on:click="addRecipe">Submit Recipe</button>
    <div id="confirmation" v-if="showConfirmation">
      <p>Your recipe was added. Thanks!</p>
    </div>
    <div id="error">
      <p v-if="errors">Error(s) adding recipe:</p>
      <p v-for="(error, name) in errors" v-bind:key="name">{{ error[0] }}</p>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import IngredientButtons from "@/components/IngredientButtons.vue";
import Validator from "validatorjs";

export default {
  components: {
    "ingredient-buttons": IngredientButtons,
  },
  data() {
    return {
      errors: null,
      showConfirmation: false,
      selectedIngredients: [],
      recipe: {},
    };
  },
  methods: {
    toggleIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient);
      } else {
        this.selectedIngredients = this.selectedIngredients.filter((elem) => {
          return ingredient !== elem;
        });
      }
    },
    addRecipe() {
      if (this.validate()) {
        this.recipe.key_ingredient = this.selectedIngredients.toString();
        this.recipe.num_like = 0;
        axios.post("/recipe", this.recipe).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
            this.showConfirmation = false;
          } else {
            this.$emit("update-recipes");
            this.showConfirmation = true;
            this.errors = false;
            this.recipe = {};
          }
        });
      }
    },
    validate() {
      let validator = new Validator(this.product, {
        name: "required",
        key_ingredient: "required",
        description: "required",
        instruction: "required",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
  },
};
</script>

<style scoped>
#inputs {
  text-align: left;
}
#confirmation {
  color: green;
}
#error {
  color: red;
}
.required {
  color: red;
}
</style>