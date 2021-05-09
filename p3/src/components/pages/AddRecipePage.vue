<template>
  <div id="add-recipe-container">
    <span
      ><i
        >Help contribute to the recipe book by submitting a new recipe.</i
      ></span
    >

    <div id="inputs">
      <label for="name">Name <span class="required">*</span></label>
      <input type="text" v-model="recipe.name" id="name" />
      <div v-if="errors && 'name' in errors">
        <p class="error" v-for="(err, index) in errors.name" v-bind:key="index">
          {{ err }}
        </p>
      </div>

      <label for="description"
        >Description <span class="required">*</span></label
      >
      <textarea v-model="recipe.description" id="description" />
      <div v-if="errors && 'description' in errors">
        <p
          class="error"
          v-for="(err, index) in errors.description"
          v-bind:key="index"
        >
          {{ err }}
        </p>
      </div>

      <label for="instruction"
        >Instructions <span class="required">*</span></label
      >
      <textarea v-model="recipe.instruction" id="instruction" />
      <div v-if="errors && 'instruction' in errors">
        <p
          class="error"
          v-for="(err, index) in errors.instruction"
          v-bind:key="index"
        >
          {{ err }}
        </p>
      </div>

      <label for="key-ingredient"
        >Key Ingredients <span class="required">*</span></label
      >
      <ingredient-buttons
        v-on:toggleIngredient="toggleIngredient($event)"
        v-bind:selectedIngredients="selectedIngredients"
      />
      <div v-if="errors && 'key_ingredient' in errors">
        <p
          class="error"
          v-for="(err, index) in errors.key_ingredient"
          v-bind:key="index"
        >
          {{ err }}
        </p>
      </div>
    </div>

    <button id="submit-recipe-button" v-on:click="addRecipe">
      Submit Recipe
    </button>
    <div id="confirmation" v-if="showConfirmation">
      <p>Your recipe was added. Thanks!</p>
    </div>
    <div class="error" id="error-div">
      <p v-if="errors">Error(s) adding recipe.</p>
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
      recipe: {
        name: "",
        description: "",
        instruction: "",
        key_ingredient: "",
      },
    };
  },
  methods: {
    toggleIngredient(ingredient) {
      if (!this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients.push(ingredient);
        this.recipe.key_ingredient = this.selectedIngredients.toString();
      } else {
        this.selectedIngredients = this.selectedIngredients.filter((elem) => {
          return ingredient !== elem;
        });
        this.recipe.key_ingredient = this.selectedIngredients.toString();
      }
    },
    addRecipe() {
      if (this.validate()) {
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
      let validator = new Validator(this.recipe, {
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
.error {
  color: red;
}
.required {
  color: red;
}
</style>