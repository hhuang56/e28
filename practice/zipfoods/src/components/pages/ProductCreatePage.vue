<template>
  <div>
    <h2>Add a Product</h2>

    <div id="inputs">
      <label for="name">Name <span class="required">*</span></label>
      <input
        type="text"
        placeholder="3-100 chars"
        v-model="product.name"
        id="name"
      />

      <label for="sku">SKU: <span class="required">*</span></label>
      <input
        type="text"
        placeholder="3-100 chars; unique; letters, numbers, and _ permitted"
        v-model="product.sku"
        id="sku"
      />

      <label for="price">Price: <span class="required">*</span></label>
      <input
        type="text"
        placeholder="100 char min"
        v-model="product.price"
        id="price"
      />

      <label for="available"
        >Quantity available: <span class="required">*</span></label
      >
      <input
        type="text"
        placeholder="numbers only"
        v-model="product.available"
        id="available"
      />

      <label for="weight"
        >Weight (in lbs): <span class="required">*</span></label
      >
      <input
        type="text"
        placeholder="numbers only"
        v-model="product.weight"
        id="weight"
      />

      <label for="perishable" class="form-checkbox-label">
        <input type="checkbox" v-model="product.perishable" id="perishable" />
        Perishable? <span class="required">*</span>
      </label>

      <label for="description"
        >Description <span class="required">*</span></label
      >
      <textarea
        placeholder="100 char min"
        v-model="product.description"
        id="description"
      ></textarea>
    </div>

    <button v-on:click="addProduct">Add Product</button>
    <div id="confirmation" v-if="showConfirmation">
      <p>Your product was added.</p>
    </div>
    <div id="error">
      <p v-if="errors">Error(s) adding product:</p>
      <p v-for="(error, name) in errors" v-bind:key="name">{{ error[0] }}</p>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      errors: null,
      showConfirmation: false,
      product: {
        name: "Candy Heart Grapes",
        sku: "candy-heart-grapes-" + new Date().valueOf(),
        price: 5.99,
        available: 25,
        weight: 2,
        perishable: true,
        description:
          "Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!",
      },
    };
  },
  methods: {
    addProduct() {
      axios.post("/product", this.product).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
          this.showConfirmation = false;
        } else {
          this.$emit("update-products");
          this.showConfirmation = true;
          this.product = {};
        }
      });
    },
  },
};
</script>

<style scoped>
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