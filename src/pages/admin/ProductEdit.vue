<template>
  <div class="edit-product-container">
    <h2>Sửa sản phẩm</h2>

    <form @submit.prevent="update" class="product-form">
      <div class="form-group">
        <label for="product-name">Tên sản phẩm:</label>
        <input
          id="product-name"
          v-model="product.name"
          type="text"
          required
          class="form-input"
          placeholder="Nhập tên sản phẩm"
        />
      </div>

      <div class="form-group">
        <label for="product-price">Giá:</label>
        <input
          id="product-price"
          v-model="product.price"
          type="number"
          required
          class="form-input"
          placeholder="Nhập giá sản phẩm"
          min="0"
        />
      </div>

      <div class="form-group">
        <label for="product-image">Hình ảnh (URL):</label>
        <input
          id="product-image"
          v-model="product.image"
          type="url"
          required
          class="form-input"
          placeholder="Dán URL hình ảnh"
        />
      </div>

      <div v-if="product.image" class="image-preview">
        <label>Ảnh xem trước:</label>
        <img :src="product.image" alt="Ảnh sản phẩm" class="preview-img" />
      </div>

      <button type="submit" class="submit-button">Cập nhật sản phẩm</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      product: {},
    };
  },

  mounted() {
    let list = JSON.parse(localStorage.getItem("products")) || [];
    const originalProduct = list.find((p) => p.id == this.id);
    this.product = originalProduct
      ? JSON.parse(JSON.stringify(originalProduct))
      : {};
  },

  methods: {
    update() {
      let list = JSON.parse(localStorage.getItem("products")) || [];

      const index = list.findIndex((p) => p.id == this.id);

      if (index !== -1) {
        list[index] = this.product;
        localStorage.setItem("products", JSON.stringify(list));
      }

      this.$router.push("/admin/products");
    },
  },
};
</script>

<style scoped>
.edit-product-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
}

.form-input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #4f46e5;
  outline: none;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

.image-preview {
  margin-top: 10px;
  padding: 10px;
  border: 1px dashed #ccc;
  border-radius: 8px;
  text-align: center;
}

.preview-img {
  max-width: 150px;
  max-height: 150px;
  margin-top: 10px;
  object-fit: contain;
  border: 1px solid #eee;
  padding: 5px;
  border-radius: 4px;
}

.submit-button {
  padding: 12px 20px;
  margin-top: 15px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #3730a3;
}
</style>
