<script setup>

</script>

<template>
    <!-- Header -->
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <router-link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="/admin">
            <strong>Admin Panel</strong>
        </router-link>

        <!-- User dropdown -->
        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
                <a class="nav-link px-3 text-white" href="#" role="button" data-bs-toggle="dropdown">
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocL3AQen832Q-I-BuOJFmUovbo2OfVKbqe3Hd4wRtoKUXL3oXSYx=s360-c-no" alt="" width="32" height="32" class="rounded-circle me-2">
                    <span class="d-none d-sm-inline">Admin</span>
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
