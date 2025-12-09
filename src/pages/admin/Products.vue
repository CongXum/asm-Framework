<template>
  <div class="product-management-container">
    <div class="header-actions">
      <h2>Quản lý sản phẩm</h2>
      <router-link to="/admin/products/add" class="add-button">
        + Thêm sản phẩm
      </router-link>
    </div>

    <div class="table-wrapper">
      <table class="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hình</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td class="id-cell">{{ item.id.toString().slice(-6) }}</td>
            <td>{{ item.name }}</td>
            <td class="price-cell">{{ formatPrice(item.price) }}</td>
            <td class="image-cell">
              <img :src="item.image" alt="Hình ảnh SP" class="product-img" />
            </td>
            <td class="actions-cell">
              <router-link
                :to="`/admin/products/edit/${item.id}`"
                class="action-link edit-link"
                >Sửa</router-link
              >
              <button @click="remove(item.id)" class="action-btn delete-btn">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-if="products.length === 0" class="no-products">
        Chưa có sản phẩm nào được thêm. Hãy thêm sản phẩm mới!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    this.loadProduct();
  },

  methods: {
    loadProduct() {
      this.products = JSON.parse(localStorage.getItem("products")) || [];
    },

    remove(id) {
      if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        this.products = this.products.filter((p) => p.id != id);

        localStorage.setItem("products", JSON.stringify(this.products));

        alert("Sản phẩm đã được xóa!");
      }
    },

    formatPrice(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },
  },

  watch: {
    $route(to, from) {
      if (to.path === "/admin/products") {
        this.loadProduct();
      }
    },
  },
};
</script>

<style scoped>
.product-management-container {
  padding: 20px;
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.add-button {
  text-decoration: none;
  padding: 10px 18px;
  background-color: #4f46e5;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #3730a3;
}

.table-wrapper {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.product-table th {
  background-color: #f3f4f6;
  padding: 12px 15px;
  font-weight: 600;
  border-bottom: 2px solid #ddd;
}

.product-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}

.product-table tbody tr:hover {
  background-color: #f9f9f9;
}

.id-cell {
  font-size: 12px;
  color: #777;
}

.price-cell {
  font-weight: 600;
  color: #d9534f;
}

.image-cell {
  width: 100px;
}

.product-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 2px;
}

.actions-cell {
  white-space: nowrap;
}

.action-link,
.action-btn {
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
}

.edit-link {
  color: #4f46e5;
  border: 1px solid #4f46e5;
  background: #eef2ff;
}

.edit-link:hover {
  background: #d1d5db;
}

.delete-btn {
  color: white;
  background-color: #dc3545;
  border: none;
}

.delete-btn:hover {
  background-color: #c82333;
}

.no-products {
  text-align: center;
  padding: 30px;
  color: #777;
  font-style: italic;
  border-top: 1px solid #eee;
  margin-top: 0;
}
</style>
