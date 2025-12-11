<script setup>
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link class="navbar-brand fw-bold" to="/">FPoly Shop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><router-link class="nav-link" to="/">Trang chủ</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/product">Sản phẩm</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/contact">Liên hệ</router-link></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link class="nav-link" to="/cart"><i class="bi bi-cart"></i> Giỏ
                            hàng (3)</router-link></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/login">Đăng nhập</router-link></li>
                            <li><router-link class="dropdown-item" to="/register">Đăng ký</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>