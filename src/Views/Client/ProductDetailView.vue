<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Products } from "../../services/products.service";
const productModel = new Products;
const route = useRoute();
const id = route.params.id;

const product = ref(null);
const quantity = ref(1);

const getProduct = async () => {
    try {
        const res = await productModel.getById(id);
        product.value = res.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

const addToCart = () => {
    if (quantity.value > product.value.stock) {
        alert("Số lượng vượt quá tồn kho!");
        return;
    }
    alert(`Đã thêm ${quantity.value} sản phẩm vào giỏ!`);
};

const formatNumber = (num) => {
    return Number(num).toLocaleString("en-US");
};

onMounted(async () => {
    getProduct();
});
</script>

<template>
    <div class="container my-5">
        <div class="row" v-if="product">
            <div class="col-md-6">
                <img :src="`/images/products/${product.thumbnail}`" class="img-fluid" alt="Product">
            </div>
            <div class="col-md-6">
                <h2>{{ product.name }}</h2>
                <p class="text-danger fs-3 fw-bold">{{ formatNumber(product.price) }}đ</p>
                <p>{{ product.description }}</p>
                <div class="mb-3">
                    <div class="mt-3">
                        <label class="form-label fw-bold">Số lượng:</label>
                        <div class="input-group" style="max-width: 180px;">
                            <button class="btn btn-outline-secondary" type="button" @click="quantity > 1 ? quantity-- : null">
                                -
                            </button>
                            <input type="number" class="form-control text-center" v-model="quantity" min="1"
                                :max="product.stock" />
                            <button class="btn btn-outline-secondary" type="button"
                                @click="quantity < product.stock ? quantity++ : null">
                                +
                            </button>
                        </div>
                        <small v-if="product.stock > 0" class="text-muted">
                            Tồn kho: {{ product.stock }} sản phẩm
                        </small>
                        <small v-else class="text-muted">
                            Tồn kho: Hết hàng
                        </small>
                    </div>
                </div>
                <button @click="addToCart()" class="btn btn-danger btn-lg">Thêm vào giỏ hàng</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-fluid {
    width: 100%;
    height: 400px;
    /* Chiều cao cố định bạn muốn */
    object-fit: cover;
    /* Giúp ảnh luôn đầy khung, không méo */
    border-radius: 8px;
    /* tùy chọn */
}
</style>