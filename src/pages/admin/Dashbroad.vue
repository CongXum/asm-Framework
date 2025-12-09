<script setup>
import { ref, onMounted } from "vue";

const totalProducts = ref(0);

const latestProducts = ref([]);

const totalOrders = 56;
const totalCustomers = 24;

const loadLatestProducts = () => {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    try {
      let productList = JSON.parse(storedProducts);

      if (Array.isArray(productList)) {
        productList.sort((a, b) => b.id - a.id);
        latestProducts.value = productList.slice(0, 5);
      }
    } catch (error) {
      console.error("Lỗi khi phân tích dữ liệu sản phẩm:", error);
    }
  }
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

onMounted(() => {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    try {
      const productList = JSON.parse(storedProducts);
      if (Array.isArray(productList)) {
        totalProducts.value = productList.length;
      }
    } catch (error) {
      totalProducts.value = 0;
    }
  }

  loadLatestProducts();
});
</script>

<template>
  <div class="dashboard">
    <h1 class="title">Dashboard</h1>

    <div class="stats">
      <div class="card card-product">
        <h3>Tổng sản phẩm</h3>
        <p class="number">{{ totalProducts }}</p>
      </div>

      <div class="card card-order">
        <h3>Tổng đơn hàng</h3>
        <p class="number">{{ totalOrders }}</p>
      </div>

      <div class="card card-customer">
        <h3>Tổng khách hàng</h3>
        <p class="number">{{ totalCustomers }}</p>
      </div>
    </div>

    <div class="welcome-box">
      <h2>Chào mừng bạn đến trang quản trị!</h2>
      <p>Hãy sử dụng sidebar để quản lý sản phẩm, đơn hàng và khách hàng.</p>
    </div>

    <div class="recent-table-section">
      <h2 class="section-title">Sản phẩm mới nhất</h2>

      <div v-if="latestProducts.length > 0" class="table-wrapper">
        <table class="recent-product-table">
          <thead>
            <tr>
              <th>Hình</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in latestProducts" :key="item.id">
              <td class="img-col">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="recent-product-img"
                />
              </td>
              <td class="name-col">{{ item.name }}</td>
              <td class="price-col">{{ formatPrice(item.price) }}</td>
              <td class="id-col">{{ item.id.toString().slice(-6) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-else class="no-recent-data">
        Chưa có sản phẩm nào được thêm gần đây.
      </p>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 20px;
}

.title {
  margin-bottom: 25px;
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
}

.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  flex: 1;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  border-bottom: 4px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-bottom: 12px;
  font-size: 16px;
  color: #6b7280;
}

.number {
  font-size: 36px;
  font-weight: 800;
}

.card-product {
  border-bottom-color: #4f46e5;
}
.card-product .number {
  color: #4f46e5;
}

.card-order {
  border-bottom-color: #10b981;
}
.card-order .number {
  color: #10b981;
}

.card-customer {
  border-bottom-color: #f59e0b;
}
.card-customer .number {
  color: #f59e0b;
}

.welcome-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #4f46e5;
  margin-bottom: 40px;
}

.welcome-box h2 {
  font-size: 22px;
  color: #1f2937;
  margin-bottom: 10px;
}

.welcome-box p {
  color: #6b7280;
}

.recent-table-section {
  padding: 0 20px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 20px;
}

.table-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
}

.recent-product-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.recent-product-table th,
.recent-product-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}

.recent-product-table th {
  background-color: #f3f4f6;
  font-weight: 600;
}

.recent-product-table tbody tr:last-child td {
  border-bottom: none;
}

.recent-product-table tbody tr:hover {
  background-color: #f9f9f9;
}

.img-col {
  width: 80px;
}
.recent-product-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 4px;
}

.price-col {
  font-weight: 700;
  color: #4f46e5;
  white-space: nowrap;
}

.id-col {
  font-size: 12px;
  color: #93c5fd;
  font-family: monospace;
}

.no-recent-data {
  text-align: center;
  padding: 30px;
  color: #777;
  font-style: italic;
}

@media (max-width: 768px) {
  .stats {
    flex-direction: column;
  }
  .card {
    padding: 20px;
  }
}
</style>
