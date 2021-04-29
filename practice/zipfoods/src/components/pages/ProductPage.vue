<template>
  <div>
    <div id="product-page" v-if="selectedProduct.length > 0">
      <show-product
        v-for="product in selectedProduct"
        v-bind:key="product.id"
        v-bind:product="product"
      ></show-product>
    </div>
    <div id="error-page" v-if="selectedProduct.length === 0">
      <error-page v-bind:id="id" />
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import ErrorPage from "@/components/pages/ErrorPage.vue";

export default {
  components: {
    "show-product": ShowProduct,
    "error-page": ErrorPage,
  },
  props: {
    id: {
      type: String,
    },
  },
  computed: {
    selectedProduct() {
      console.log(this.id);
      console.log(this.$store.getters.getProductById(this.id));
      return this.$store.getters.getProductById(this.id);
    },
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
#product-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
</style>