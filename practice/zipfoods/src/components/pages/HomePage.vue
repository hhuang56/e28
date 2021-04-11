<template>
  <div id="home-page">
    <p>
      ZipFoods is your one-stop-shop for convenient online grocery shopping in
      the greater Boston area.
    </p>
    <show-featured
      v-bind:products="products"
      v-bind:category="'snacks'"
    ></show-featured>
  </div>
</template>

<script>
import ShowFeatured from "@/components/ShowFeatured.vue";

export default {
  props: {
    products: {
      type: Array,
      default: null,
    },
  },
  components: {
    "show-featured": ShowFeatured,
  },
};
</script>

<style>
</style>