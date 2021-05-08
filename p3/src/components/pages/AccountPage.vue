<template>
  <div id="account-page">
    <div v-if="user">
      <h2>Hi, {{ user.name }}!</h2>

      <div id="favorites">
        <strong>Your Favorites</strong>
        <p v-if="favorites && favorites.length == 0">No favorites yet.</p>
        <li v-for="(favorite, key) in favorites" v-bind:key="key">
          {{ favorite }}
        </li>
      </div>

      <button v-on:click="logout">Logout</button>
    </div>

    <div v-else id="loginForm">
      <h2 v-if="showLogin">Login</h2>
      <h2 v-else>Register</h2>
      <div v-if="!showLogin">
        <label>
          Name:
          <input type="text" v-model="data.name" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" v-model="data.email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" v-model="data.password" />
        </label>
      </div>

      <button v-if="showLogin" v-on:click="login">Login</button>
      <p>
        <button v-if="showLogin" v-on:click="toggleShowLogin">
          Dont have an account? Click here.
        </button>
      </p>
      <button v-if="!showLogin" v-on:click="register">Register</button>
      <p>
        <button v-if="!showLogin" v-on:click="showRegister">
          Already have an account? Click here.
        </button>
      </p>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
      data: {
        name: "jill",
        email: "jill@harvard.edu",
        password: "asdfasdf",
      },
      errors: null,
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
  },
  methods: {
    toggleShowLogin() {
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
      axios
        .post("login", { email: this.data.email, password: this.data.password })
        .then((response) => {
          if (response.data.authenticated) {
            this.$store.commit("setUser", response.data.user);
          } else {
            this.errors = response.data.errors;
          }
        });
    },
    register() {
      axios.post("register", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
          this.data = {
            name: "",
            email: "",
            password: "",
          };
          this.showLogin = true;
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
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