<template>
  <div id="show-products">
    <h2>Products</h2>
    <div id="products">
      <show-simple-product
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:product="product"
      ></show-simple-product>
    </div>
  </div>
</template>

<script>
import ShowSimpleProduct from "@/components/ShowSimpleProduct.vue";

export default {
  components: {
    "show-simple-product": ShowSimpleProduct,
  },
  props: {
    products: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>
#products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
</style>