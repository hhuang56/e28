<template>
  <div class="show-product">
    <div class="name">
      {{ mutableProduct.name }}
    </div>
    <p><button v-on:click="editing = true">Edit</button></p>

    <img class="thumb" v-bind:src="imgSrc" />

    <div v-if="!editing">
      <div class="price">${{ mutableProduct.price }}</div>
      <p class="description">{{ mutableProduct.description }}</p>
    </div>
    <div v-if="editing">
      <div id="inputs">
        <label for="name">Name <span class="required">*</span></label>
        <input
          type="text"
          placeholder="3-100 chars"
          v-model="mutableProduct.name"
          id="name"
        />

        <label for="sku">SKU: <span class="required">*</span></label>
        <input
          type="text"
          placeholder="3-100 chars; unique; letters, numbers, and _ permitted"
          v-model="mutableProduct.sku"
          id="sku"
        />

        <label for="price">Price: <span class="required">*</span></label>
        <input
          type="text"
          placeholder="100 char min"
          v-model="mutableProduct.price"
          id="price"
        />

        <label for="available"
          >Quantity available: <span class="required">*</span></label
        >
        <input
          type="text"
          placeholder="numbers only"
          v-model="mutableProduct.available"
          id="available"
        />

        <label for="weight"
          >Weight (in lbs): <span class="required">*</span></label
        >
        <input
          type="text"
          placeholder="numbers only"
          v-model="mutableProduct.weight"
          id="weight"
        />

        <label for="perishable" class="form-checkbox-label">
          <input
            type="checkbox"
            v-model="mutableProduct.perishable"
            id="perishable"
          />
          Perishable? <span class="required">*</span>
        </label>

        <label for="description"
          >Description <span class="required">*</span></label
        >
        <textarea
          placeholder="100 char min"
          v-model="mutableProduct.description"
          id="description"
        ></textarea>
      </div>

      <button v-on:click="updateProduct">Update Product</button>
      <div id="confirmation" v-if="showConfirmation">
        <p>Your product was updated.</p>
      </div>
      <div id="error">
        <p v-if="errors">Error(s) adding product:</p>
        <p v-for="(error, name) in errors" v-bind:key="name">{{ error[0] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      editing: false,
      showConfirmation: false,
      errors: null,
      mutableProduct: this.product,
    };
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
  methods: {
    updateProduct() {
      axios
        .put("/product/" + this.mutableProduct.id, this.mutableProduct)
        .then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
            this.showConfirmation = false;
          } else {
            this.$emit("update-products");
            this.showConfirmation = true;
            this.editing = false;
          }
        });
    },
  },
};
</script>

<style scoped>
.show-product {
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

#inputs {
  text-align: left;
}
#confirmation {
  color: green;
}
#error {
  color: red;
}
.required {
  color: red;
}
</style>