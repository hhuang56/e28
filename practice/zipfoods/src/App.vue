<template>
  <div>
    <img
      alt="ZipFoods Logo"
      src="@/assets/images/zipfoods-logo.png"
      id="logo"
    />
    <!--<nav>
      <ul>
        <li v-for="link in links" :key="link">
          <a href="#" v-on:click="page = link">{{ link }}</a>
        </li>
      </ul>
    </nav>-->
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
    <!--<component v-bind:is="linkComponents[page]"></component>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  /*components: {
    "home-page": HomePage,
    "categories-page": CategoriesPage,
    "products-page": ProductsPage,
  },*/
  data() {
    return {
      links: ["home", "products", "categories"],
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
      },
      /*page: "home",
      linkComponents: {
        home: "home-page",
        products: "products-page",
        categories: "categories-page",
      },*/
    };
  },
};
</script>
    HomePage

<style src='@/assets/css/zipfoods.css'></style>
<style>
</style>
