<template>
  <div id="account-page">
    <div v-if="user">
      <h2>Hi, {{ user.name }}!</h2>

      <div id="favorites">
        <strong>Your Favorites</strong>
        <p v-if="favorites && favorites.length == 0">No favorites yet.</p>

        <recipe-card
          v-for="(favorite, key) in favoriteRecipes"
          v-bind:key="key"
          v-bind:recipe="favorite"
        />
      </div>

      <button v-on:click="logout" id="logout-button">Logout</button>
    </div>

    <div v-else id="loginForm">
      <h2 v-if="showLogin">Login</h2>
      <h2 v-else>Register</h2>
      <div v-if="!showLogin">
        <label>
          Name:
          <input type="text" v-model="data.name" id="name-input" />
        </label>
        <div v-if="errors && 'name' in errors">
          <p
            class="error"
            v-for="(err, index) in errors.name"
            v-bind:key="index"
          >
            {{ err }}
          </p>
        </div>
      </div>
      <div>
        <label>
          Email:
          <input type="text" v-model="data.email" id="email-input" />
        </label>
        <div v-if="errors && 'email' in errors">
          <p
            class="error"
            v-for="(err, index) in errors.email"
            v-bind:key="index"
          >
            {{ err }}
          </p>
        </div>
      </div>
      <div>
        <label>
          Password:
          <input type="password" v-model="data.password" id="password-input" />
        </label>
        <div v-if="errors && 'password' in errors">
          <p
            class="error"
            v-for="(err, index) in errors.password"
            v-bind:key="index"
          >
            {{ err }}
          </p>
        </div>
      </div>

      <button v-if="showLogin" v-on:click="login" id="login-button">
        Login
      </button>
      <p>
        <button
          v-if="showLogin"
          v-on:click="toggleShowLogin"
          id="toggle-register-button"
        >
          Dont have an account? Click here.
        </button>
      </p>
      <button v-if="!showLogin" v-on:click="register" id="register-button">
        Register
      </button>
      <p>
        <button
          v-if="!showLogin"
          v-on:click="toggleShowLogin"
          id="toggle-login-button"
        >
          Already have an account? Click here.
        </button>
      </p>

      <div v-if="errors">
        <p class="error">Fix errors above.</p>
      </div>
      <div v-if="serverErrors">
        <p class="error" v-for="(error, index) in serverErrors" :key="index">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  components: {
    "recipe-card": RecipeCard,
  },
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
      },
      errors: null,
      serverErrors: null,
      showLogin: true,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    products() {
      return this.$store.state.products;
    },
    favorites() {
      return this.$store.state.favorites;
    },
    favoriteRecipes() {
      return this.$store.state.favorites.map((favorite) => {
        return this.$store.getters.getRecipeById(favorite.recipe_id)[0];
      });
    },
  },
  methods: {
    toggleShowLogin() {
      this.errors = null;
      this.serverErrors = null;
      this.showLogin = !this.showLogin;
    },
    loadFavorites() {
      if (this.user) {
        axios.get("favorite/query?user_id=" + this.user.id).then((response) => {
          this.$store.commit("setFavorites", response.data.favorite);
        });
      }
    },
    login() {
      if (this.validateLogin()) {
        axios
          .post("login", {
            email: this.data.email,
            password: this.data.password,
          })
          .then((response) => {
            if (response.data.authenticated) {
              this.$store.commit("setUser", response.data.user);
              this.data = {
                name: "",
                email: "",
                password: "",
              };
              this.errors = null;
              this.serverErrors = null;
            } else {
              this.serverErrors = response.data.errors;
            }
          });
      }
    },
    register() {
      if (this.validateRegistration()) {
        axios.post("register", this.data).then((response) => {
          if (response.data.success) {
            this.$store.commit("setUser", response.data.user);
            this.data = {
              name: "",
              email: "",
              password: "",
            };
            this.errors = null;
            this.serverErrors = null;
            this.showLogin = true;
          } else {
            this.serverErrors = response.data.errors;
          }
        });
      }
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
    },
    validateLogin() {
      let validator = new Validator(this.data, {
        email: "required",
        password: "required",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    validateRegistration() {
      let validator = new Validator(this.data, {
        name: "required",
        email: "required|email",
        password: "required|min:8",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
  },
  watch: {
    user() {
      this.loadFavorites();
    },
  },
  mounted() {
    this.loadFavorites();
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.required {
  color: red;
}
</style>