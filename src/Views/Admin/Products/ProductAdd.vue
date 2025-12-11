<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Products } from "../../../services/products.service";

const productModel = new Products();

const router = useRouter();
const product = reactive({
    name: "",
    description: "",
    price: "",
    thumbnail: "arabica.png",
});


async function store() {
    try {
        await productModel.create(product);
        router.push({ name: "ProductIndex" });
    } catch (err) {
        console.error("Lỗi khi thêm dữ liệu:", err);
    }
}
</script>

<template>
    <div class="container rounded" style="padding: 50px 0">
        <form @submit.prevent="store" class="bg-white">
            <div class="row align-items-center edit-form" enctype="multipart/form-data">
                <div class="col-md-6 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle" width="300px" id="avatar"
                            src="/images/products/default-product-image.png" alt="Product Thumbnail" />
                    </div>
                </div>
                <div class="col-md-6 border-right">
                    <div class="px-3 pe-lg-5 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Thêm sản phẩm</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Tên</label>
                                <input type="text" class="form-control" placeholder="VD: Cà phê Arabica 250g"
                                    v-model="product.name" required />
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Mô tả</label>
                                <textarea class="form-control" cols="30" rows="4"
                                    placeholder="VD: Cà phê Arabica tinh khiết..." v-model="product.description"
                                    required></textarea>
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Giá</label>
                                <input type="number" class="form-control" placeholder="VD: 100000"
                                    v-model.number="product.price" required min="0" />
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            <button type="submit" class="btn btn-primary profile-button" style="background-color: #333">
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
