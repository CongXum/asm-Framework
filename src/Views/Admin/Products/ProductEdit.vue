<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Products } from "../../../services/products.service";

const productModel = new Products;
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const product = reactive({
    name: "",
    description: "",
    price: 0,
    thumbnail: "product_id1.avif",
});

const fetchProduct = async () => {
    try {
        const res = await productModel.getById(id);
        Object.assign(product, res.data);
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
    }
};

onMounted(() => {
    fetchProduct();
});

const update = async (data) => {
    try {
        await productModel.updated(id, data);
        alert("Cập nhật sản phẩm thành công!");
        router.push({ name: "ProductIndex" });
    } catch (error) {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
};
</script>

<template>
    <div class="container rounded" style="padding: 50px 0">
        <form @submit.prevent="update(product)" class="bg-white row align-items-center edit-form" enctype="multipart/form-data">
            <div class="col-md-6 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img class="rounded-circle" width="300px" id="avatar" :src="`/images/products/${product.thumbnail}`"
                        alt="Product thumbnail" />
                </div>
            </div>
            <div class="col-md-6 border-right">
                <div class="px-3 pe-lg-5 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Thông tin sản phẩm</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels">Tên</label>
                            <input type="text" class="form-control" placeholder="VD: Cà phê Arabica 250g"
                                v-model="product.name" name="name" />
                            <p class="field-message mb-0"></p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels">Mô tả</label>
                            <textarea class="form-control" cols="30" rows="4" v-model="product.description"
                                name="description"
                                placeholder="VD: Cà phê Arabica tinh khiết được trồng và chăm sóc tận tâm trên những thửa đất phủ đầy cỏ xanh tươi mát..."></textarea>
                            <p class="field-message mb-0"></p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels">Giá</label>
                            <input type="number" class="form-control" v-model="product.price" name="price"
                                placeholder="VD: 100000" />
                            <p class="field-message mb-0"></p>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <button type="submit" class="btn btn-primary profile-button" style="background-color: #333">
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
