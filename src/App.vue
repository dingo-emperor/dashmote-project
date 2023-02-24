<script setup>
import projectItems from "./components/projectItems.vue";
import searchInput from "./components/searchInput.vue";
</script>

<template>
  <Layout>
    <Header :style="{ height: '260px', background: '#fff' }">
      <searchInput />
    </Header>
    <Content><projectItems /></Content>
  </Layout>
</template>
