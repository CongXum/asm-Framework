<script setup>
import Banner from "../../components/Banner.vue";
import CartItem from "../../components/CartItem.vue";
import { Products } from "../../services/products.service";
import { ref, onMounted } from "vue";

const productModel = new Products();
const products = ref([]);

const getData = async () => {
  const result = await productModel.list();
  if (result.status === 200) {
    products.value = result.data;
  } else {
    console.error("Lỗi khi lấy data:", error);
  }
};

const formatNumber = (num) => {
  return Number(num).toLocaleString("en-US");
};

onMounted(async () => {
  getData();
});
</script>

<template>
  <Banner />
  <CartItem />
  <div class="container">
    <div class="d-flex justify-content-between mb-4">
      <h2>Sản phẩm</h2>
      <div>
        <button class="btn btn-outline-primary rounded-pill mx-2">
          Tất cả sản phẩm
        </button>
        <button class="btn btn-outline-primary rounded-pill mx-2">
          Nổi bật
        </button>
        <button class="btn btn-outline-primary rounded-pill mx-2">
          Bán chạy
        </button>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-3 mb-4"
        v-for="(product, index) in products.slice(0, 8)"
        :key="index"
      >
        <div class="card h-100">
          <img
            :src="`images/products/${product.thumbnail}`"
            class="card-img-top"
            alt="Product"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="product-description">{{ product.description }}</p>
            <p class="text-danger fw-bold">
              {{ formatNumber(product.price) }}đ
            </p>
            <RouterLink
              :to="{ name: 'detail', params: { id: product.id } }"
              class="btn btn-primary mt-auto"
              >Xem chi tiết</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6" data-wow-delay="0.1s">
            <a class="text-decoration-none" href="#">
              <div class="position-relative">
                <img
                  src="https://i.pinimg.com/736x/f5/98/7c/f5987c61df4c5c373f5d80832604cd8b.jpg"
                  class="img-fluid w-100 "
                  alt=""
                />
                <div
                  class="position-absolute top-0 start- w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                ></div>
              </div>
            </a>
          </div>
          <div class="col-lg-6" data-wow-delay="0.2s">
            <a class="text-decoration-none" href="#">
              <div class="position-relative">
                <img
                  src="https://i.pinimg.com/1200x/58/c2/c9/58c2c96003a80c6495716440505aa963.jpg"
                  class="img-fluid w-100 "
                  alt=""
                />
                <div
                  class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                ></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  width: 100%;
  height: 300px;
  /* Chiều cao cố định bạn muốn */
  object-fit: cover;
  /* Giúp ảnh luôn đầy khung, không méo */
  border-radius: 8px;
  /* tùy chọn */
}

.product-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* Giới hạn 2 dòng */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
