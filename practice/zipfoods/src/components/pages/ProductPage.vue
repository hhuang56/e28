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
    products: {
      type: Array,
      default: null,
    },
  },
  computed: {
    selectedProduct() {
      return this.products.filter((product) => {
        return product.id === parseInt(this.id);
      });
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