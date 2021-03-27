<template>
  <div>
    <span v-bind:class="{ correct: winning, error: wrong }">{{
      feedback
    }}</span>
    <button v-if="winning" id="playAgain" v-on:click="$emit('start-game')">
      Play Again
    </button>
  </div>
</template>

<script>
export default {
  name: "GuessFeedback",
  props: {
    winning: {
      type: Boolean,
    },
    wrong: {
      type: Boolean,
    },
    feedback: {
      type: String,
    },
  },
};
</script>


<style>
.error {
  background-color: red;
  color: white;
}

.correct {
  background-color: green;
  color: white;
}
</style>