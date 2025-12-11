<script setup>
import Header from "../../components/HeaderAdmin.vue";
import Menu from "../../components/MenuAdmin.vue";
</script>

<template>
    <Header />
    <Menu />
    <main style="margin-left: 280px; padding: 70px 20px 20px;">
        <RouterView />
    </main>
</template>

<style></style>