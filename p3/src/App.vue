<template>
  <div>
    <img alt="kitchen-scene" src="@/assets/images/kitchen.jpg" id="logo" />
    <p id="catchphrase">
      Have random ingredients in your fridge? Search our recipe book for unique
      recipes to help you finish what you've got.
    </p>
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view v-on:update-recipes="loadRecipes" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: ["search", "contribute", "ratings"],
      paths: {
        search: "/",
        contribute: "/contribute",
        ratings: "/ratings",
      },
    };
  },
  mounted() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      this.$store.dispatch("getRecipes");
    },
  },
};
</script>

<style src='@/assets/css/p3.css'></style>
<style>
</style>
