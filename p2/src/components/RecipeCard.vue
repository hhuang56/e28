<template>
  <div class="recipe-card">
    <div class="nameWrapper">
      <div class="name">{{ recipe.name }}</div>
      <div>
        <span>{{ recipe.num_like }}</span>
        <img
          v-on:click="$emit('incrementNumLike', recipe.id)"
          id="favorite"
          src="@/assets/images/heart.png"
        />
      </div>
    </div>
    <div class="description">{{ recipe.description }}</div>
    <div class="instruction">{{ recipe.instruction }}</div>
    <div class="key-ingredients">
      {{ recipe.key_ingredient.toString().replace(/,/g, ", ") }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.recipe-card {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin: 15px;
  width: 100%;
  min-width: 300px;
}
.nameWrapper {
  max-height: 25px;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
  display: flex;
  justify-content: flex-start; /* adjustment */
  position: relative; /* new */
}
.name {
  flex: 0 1 auto;
  max-width: 90%;
  position: absolute; /* new */
  left: 50%;
  transform: translateX(-50%);
}
.nameWrapper div:last-child {
  flex: 0 1 auto;
  width: 100px;
  height: 100px;
  margin-left: auto; /* new */
}
.description {
  margin: auto;
  text-align: center;
  font-style: italic;
  line-height: 1.5;
}
.key-ingredients {
  font-family: var(--serif-font);
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
}
#favorite {
  width: 20px;
  margin-left: auto;
  cursor: pointer;
}
</style>