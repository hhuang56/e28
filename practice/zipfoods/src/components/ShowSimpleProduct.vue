<template>
  <div class="show-simple-product">
    <div class="name">
      <router-link v-bind:to="'/product/' + product.id">{{
        product.name
      }}</router-link>
    </div>

    <img class="thumb" v-bind:src="imgSrc" />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    imgSrc() {
      // ref: https://javascript.info/try-catch
      try {
        return require("@/assets/images/products/" + this.product.id + ".jpg");
      } catch (e) {
        // This image-not-available.jpg file was included with the other images I had you download when we first set up ZipFoods
        return require("@/assets/images/products/image-not-available.jpg");
      }
    },
  },
};
</script>

<style scoped>
.show-simple-product {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin: 15px;
  width: 30%;
  min-width: 300px;
}

.name {
  height: 50px;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.thumb {
  width: 75%;
  max-width: 300px;
  border-radius: var(--radius);
}

.description {
  margin: auto;
  text-align: left;
  font-style: italic;
  line-height: 1.5;
}

.price {
  font-family: var(--serif-font);
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
}
</style>