<template>
  <div class="add-product-container">
    <h2>Thêm sản phẩm</h2>

    <form @submit.prevent="save" class="product-form">
      <div class="form-group">
        <label for="product-name">Tên sản phẩm:</label>
        <input
          id="product-name"
          v-model="name"
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
          v-model="price"
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
          v-model="image"
          type="url"
          required
          class="form-input"
          placeholder="Dán URL hình ảnh"
        />
      </div>

      <button type="submit" class="submit-button">Lưu sản phẩm</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      image: "",
    };
  },

  methods: {
    save() {
      let list = JSON.parse(localStorage.getItem("products")) || [];

      const newProduct = {
        id: Date.now(),
        name: this.name,
        price: this.price,
        image: this.image,
      };

      list.push(newProduct);
      localStorage.setItem("products", JSON.stringify(list));
      this.$router.push("/admin/products");
    },
  },
};
</script>

<style scoped>
.add-product-container {
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
