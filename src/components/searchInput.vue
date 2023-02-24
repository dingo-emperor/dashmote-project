<script setup>
import { store } from "../store.js";

// set user's input as new filter condition
const input = (event) => store.changeFilterCondition(event.target.value);
</script>

<template>
  <div>
    <input
      :value="store.filterCondition"
      @input="input"
      placeholder="Search for a key word"
    />
  </div>
</template>

<style scoped>
div {
  position: absolute;
  left: 1066px;
  top: 198px;
  width: 222px;
  height: 40px;
}

input {
  box-sizing: border-box;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #ffffff;
  /* Grey */
  border: 1px solid #c4c4c4;
  border-radius: 8px;
}
</style>
