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
            ><span v-if="link == 'cart'">({{ cartCount }}) </span
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
import { cart } from "@/common/app.js";

export default {
  name: "App",
  /*components: {
    "home-page": HomePage,
    "categories-page": CategoriesPage,
    "products-page": ProductsPage,
  },*/
  data() {
    return {
      links: ["home", "products", "categories", "add a product", "cart"],
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
        "add a product": "/product/new",
        cart: "/cart",
      },
      /*page: "home",
      linkComponents: {
        home: "home-page",
        products: "products-page",
        categories: "categories-page",
      },*/
    };
  },
  computed: {
    cartCount() {
      return this.$store.state.cartCount;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.loadProducts();
    this.$store.commit("setCartCount", cart.count());
  },
  methods: {
    loadProducts() {
      this.$store.dispatch("fetchProducts");
    },
  },
};
</script>
    HomePage

<style src='@/assets/css/zipfoods.css'></style>
<style>
</style>
