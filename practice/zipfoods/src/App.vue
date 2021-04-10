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
    <router-view
      v-bind:products="products"
      v-on:update-products="loadProducts"
    />
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: "App",
  /*components: {
    "home-page": HomePage,
    "categories-page": CategoriesPage,
    "products-page": ProductsPage,
  },*/
  data() {
    return {
      products: [],
      links: ["home", "products", "categories", "add a product"],
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
        "add a product": "/product/new",
      },
      /*page: "home",
      linkComponents: {
        home: "home-page",
        products: "products-page",
        categories: "categories-page",
      },*/
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      axios.get("product").then((response) => {
        this.products = response.data.product;
      });
    },
  },
};
</script>
    HomePage

<style src='@/assets/css/zipfoods.css'></style>
<style>
</style>
