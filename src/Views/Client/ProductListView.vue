<script setup>
import CartItem from '../../components/CartItem.vue';
import { Products } from '../../services/products.service';
import { Category } from '../../services/category.service';
import { ref, onMounted } from "vue";

const categorytModel = new Category;
const productModel = new Products;
const products = ref([]);
const categories = ref([])


const getDataProduct = async () => {
    const result = await productModel.list();
    if (result.status === 200) {
        products.value = result.data;
    } else {
        console.error("Lỗi khi lấy data:", error);
    }
}

const getDataCategory = async () => {
    const result = await categorytModel.list();
    if (result.status === 200) {
        categories.value = result.data;
    } else {
        console.error("Lỗi khi lấy data:", error);
    }
}

const formatNumber = (num) => {
    return Number(num).toLocaleString("en-US");
};

onMounted(async () => {
    getDataProduct();
    getDataCategory();
});
</script>

<template>
  <CartItem />

  <body class="bg-light">
    <div class="container py-5">
      <div class="row">
        <!-- Sidebar Danh mục -->
        <div class="col-lg-3 mb-4">
          <div class="card border-0 shadow-sm">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Danh mục sản phẩm</h5>
            </div>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item list-group-item-action active">Tất cả sản phẩm</a>
              <div v-for="category in categories">
                <a href="#" class="list-group-item list-group-item-action">{{ category.name }}</a>
              </div>
              
            </div>
          </div>
          <!-- Bộ lọc giá (tùy chọn) -->
          <div class="card border-0 shadow-sm mt-4">
            <div class="card-header bg-secondary text-white">
              <h6 class="mb-0">Lọc theo giá</h6>
            </div>
            <div class="card-body">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="price1">
                <label class="form-check-label" for="price1">Dưới 5 triệu</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="price2">
                <label class="form-check-label" for="price2">5 - 10 triệu</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="price3">
                <label class="form-check-label" for="price3">10 - 20 triệu</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="price4">
                <label class="form-check-label" for="price4">Trên 20 triệu</label>
              </div>
            </div>
          </div>
        </div>
        <!-- Main content -->
        <div class="col-lg-9">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
            </ol>
          </nav>
          <h2 class="mb-4">Điện thoại nổi bật</h2>
          <!-- Danh sách sản phẩm -->
          <div class="row g-4" >
            <!-- Sản phẩm 1 -->
            <div class="col-6 col-md-4 col-lg-4" v-for="(product, index) in products.slice(0, 9)" :key="index">
              <div class="card h-100 product-card border-0 shadow-sm">
                <img
                  :src="`public/images/products/${product.thumbnail}`"
                  class="card-img-top product-img-fixed" alt="iPhone 16">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <div class="mb-2">
                    <span class="text-danger fw-bold fs-5">{{ formatNumber(product.price) }}₫</span>
                  </div>
                  <!-- Đánh giá sao -->
                  <div class="mb-2">
                    <i class="bi bi-star-fill rating-star"></i>
                    <i class="bi bi-star-fill rating-star"></i>
                    <i class="bi bi-star-fill rating-star"></i>
                    <i class="bi bi-star-fill rating-star"></i>
                    <i class="bi bi-star-half rating-star"></i>
                    <span class="text-muted small">(128 đánh giá)</span>
                  </div>
                  <p class="product-description text-muted small flex-grow-1">
                    {{ product.description }}
                  </p>
                  <RouterLink :to="{ name: 'detail', params: { id: product.id } }" class="btn btn-primary mt-auto">Xem chi tiết</RouterLink>
                </div>
              </div>
            </div>
          </div>
          <!-- End row sản phẩm -->
          
          <!-- Chuyển trang -->
          <nav class="mt-5">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled"><a class="page-link" href="#">« Trước</a></li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Tiếp »</a></li>
            </ul>
          </nav>
          <!-- End chuyển trang -->
        </div>
        

        <!-- Sản phẩm liên quan -->
        <h3 class="mt-5 mb-4">Sản phẩm liên quan</h3>
        <div class="row g-4">

          <div class="col-6 col-md-4 col-lg-3" v-for="(product, index) in products.slice(0, 4)" :key="index">
            <div class="card border-0 shadow-sm">
              <img :src="`public/images/products/${product.thumbnail}`"
                class="card-img-top product-img-fixed" alt="AirPods Pro">
              <div class="card-body text-center">
                <h6 class="card-title">{{ product.name }}</h6>
                <p class="text-danger fw-bold">{{formatNumber(product.price)}}₫</p>
                  <RouterLink :to="{ name: 'detail', params: { id: product.id } }" class="btn btn-primary mt-auto">Xem chi tiết</RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- End Sản phẩm liên quan-->
      </div>
    </div>
  </body>
</template>

<style scoped>
  .product-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* Giới hạn 2 dòng */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>