<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Products } from "../../../services/products.service";

const productModel = new Products;
const route = useRoute();
const id = route.params.id;

const product = ref(null);

const getProduct = async () => {
    try {
        const res = await productModel.getById(id);
        product.value = res.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

onMounted(async () => {
    getProduct();
});

</script>

<template>
    <div class="container rounded" style="padding: 50px 0">
        <div class="bg-white">
            <div class="row align-items-center account-form" enctype="multipart/form-data" v-if="product">
                <div class="col-md-6 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle" width="300px" id="avatar"
                            :src="`/images/products/${product.thumbnail}`" />
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
                                <input readonly type="text" class="form-control" 
                                placeholder="Đồng" :value="product.name" name="name" />
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Mô tả</label>
                                <textarea readonly class="form-control" cols="30" rows="4" name="description">
                                {{ product.description }}</textarea>
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Giá</label><input readonly type="number" class="form-control"
                                    :value="product.price" name="price" />
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
