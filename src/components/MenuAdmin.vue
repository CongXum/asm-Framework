<template>
    <!-- Sidebar Full Height + Dropdown -->
    <nav class="sidebar" id="sidebarMenu">
        <div class="navbar-brand">ADMIN PANEL</div>

        <ul class="nav flex-column px-2">

            <li class="nav-item">
                <router-link class="nav-link active" to="/admin">
                    <i class="bi bi-house-door-fill me-3"></i> Dashboard
                </router-link>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle d-flex justify-content-between align-items-center" href="#"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="bi bi-people-fill"></i> Người dùng</span>
                </a>
                <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="/user">Danh sách người dùng</router-link></li>
                    <li><router-link class="dropdown-item" to="/userAdd">Thêm người dùng</router-link></li>
                </ul>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle d-flex justify-content-between align-items-center" href="#"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="bi bi-box-seam me-3"></i> Sản phẩm</span>
                </a>
                <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="/productAdmin">Danh sách sản phẩm</router-link></li>
                    <li><router-link class="dropdown-item" to="/productAdd">Thêm sản phẩm mới</router-link></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
body {
    min-height: 100vh;
    background: #f8f9fa;
}

/* Sidebar full height */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;
    background: #212529;
    color: #fff;
    z-index: 1000;
    padding-top: 56px;
    /* Chiều cao header */
    overflow-y: auto;
    transition: all 0.3s;
}

/* Logo/Brand */
.sidebar .navbar-brand {
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* Nav link style */
.sidebar .nav-link {
    color: rgba(255, 255, 255, 0.8);
    padding: 0.75rem 1.5rem;
    border-radius: 0;
    transition: all 0.2s;
}

.sidebar .nav-link:hover,
.sidebar .nav-link.active {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}

/* Dropdown menu trong sidebar */
.sidebar .dropdown-menu {
    background: #2c3034;
    border: none;
    width: 100%;
    border-radius: 0;
    margin: 0;
    padding: 0;
}

.sidebar .dropdown-item {
    color: rgba(255, 255, 255, 0.8);
    padding: 0.6rem 3rem;
}

.sidebar .dropdown-item:hover {
    background: #0d6efd;
    color: #fff;
}

/* Icon xoay khi mở dropdown */
.dropdown-toggle::after {
    transition: transform 0.3s;
}

.dropdown-toggle.show::after {
    transform: rotate(180deg);
}

/* Ẩn sidebar trên mobile, hiện khi nhấn nút */
@media (max-width: 767.98px) {
    .sidebar {
        margin-left: -280px;
    }

    .sidebar.show {
        margin-left: 0;
    }
}
</style>
