<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <h2>Admin Panel</h2>
      <ul class="nav-list">
        <li>
          <router-link to="/admin" class="nav-item" active-class="active"
            >Dashboard</router-link
          >
        </li>
        <li>
          <router-link
            to="/admin/products"
            class="nav-item"
            active-class="active"
            >Products</router-link
          >
        </li>
        <li>
          <router-link
            to="/admin/products/add"
            class="nav-item"
            active-class="active"
            >Add Product</router-link
          >
        </li>
      </ul>
    </aside>

    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
}

.sidebar {
  width: 250px;
  background: #1f2937;
  color: #f9fafb;
  padding: 20px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  height: 100vh;
}

.sidebar h2 {
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  padding: 0 20px;
  font-weight: 700;
  color: #93c5fd;
}

.nav-list {
  padding: 0;
  list-style: none;
}

.nav-item {
  display: block;
  padding: 12px 20px;
  color: #f9fafb;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 16px;
  border-left: 4px solid transparent;
}

.nav-item:hover {
  background: #374151;
  color: #fff;
}

.nav-item.active {
  background: #374151;
  color: #4f46e5;
  font-weight: 600;
  border-left: 4px solid #4f46e5;
}
.content {
  flex: 1;
  padding: 30px;
  background: #f0f2f5;
}
</style>
