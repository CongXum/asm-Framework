<template>
  <div class="layout-container">
    <header>
      <h2>Client Layout</h2>
    </header>
    <main class="main-content"><router-view /></main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style scoped>
.layout-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

header {
  padding: 15px;
  background: #eee;
  margin-bottom: 20px;
  max-width: 1200px;
  margin: 0 auto 20px auto;
}

.main-content {
  padding: 20px;
}
</style>
