<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const products = ref([]);
const router = useRouter();

onMounted(() => {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    products.value = JSON.parse(storedProducts);
  }
});

const goToProductPage = () => {
  router.push("/product");
};
</script>

<template>
  <div class="row mt-4">
    <div
      v-for="item in products"
      :key="item.id"
      class="col-lg-4 col-md-4 col-sm-6 mb-4"
    >
      <div class="card product-card h-100">
        <img :src="item.image" class="card-img-top" :alt="item.name" />

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ item.name }}</h5>

          <h6 class="product-price text-danger fw-bold mb-2">
            {{ item.price }}₫
          </h6>

          <p class="card-text flex-grow-1">{{ item.description }}</p>
          <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #ddd;
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 180px;
  object-fit: contain;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 12px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  overflow: hidden;
  color: #222;
}

.card-text {
  font-size: 14px;
  max-height: 50px;
  overflow: hidden;
  color: #555;
  margin-bottom: 15px;
}

.card-body {
  padding: 15px;
}

@media (max-width: 576px) {
  .product-card {
    /* min-height: 330px; */
  }
}
</style>
