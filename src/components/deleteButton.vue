<script setup>
import { store } from "../store.js";

const props = defineProps(["projectName"]);

// delete the project after user clicks "confirm"
const confirm = () => {
  store.deleteCertainProject(props.projectName);
};
</script>

<template>
  <a-popconfirm
    title="Are you sure delete this project?"
    ok-text="Yes"
    cancel-text="No"
    @confirm="confirm"
  >
    <a-button type="text" danger>Delete</a-button>
  </a-popconfirm>
</template>
