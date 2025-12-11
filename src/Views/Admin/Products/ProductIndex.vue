<script setup>
import { ref, onMounted } from "vue";
import { Products } from "../../../services/products.service";

const productModel = new Products();
const products = ref([]);

const getdata = async () => {
    const result = await productModel.list();
    if (result.status === 200) {
        products.value = result.data;
    } else {
        console.error("Lỗi khi lấy data:", error);
    }
}

const destroy = async (id) => {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
        try {
            await productModel.delete(id);
            window.location.reload();
        } catch (err) {
            console.error("Lỗi khi xóa:", err);
        }
    }
};

onMounted(async () => {
    getdata()
});

const formatNumber = (num) => {
    return Number(num).toLocaleString("en-US");
};



</script>

<template>
    <div class="d-flex justify-content-between align-items">
        <h4>Danh sách sản phẩm</h4>
        <router-link to="/productAdd"  class="btn btn-outline-primary">
            Thêm sản phẩm
        </router-link>
    </div>

    <div>
        <table class="table table-borderless table-responsive card-1">
            <thead>
                <tr class="border-bottom">
                    <th>
                        <span class="ml-1">STT</span>
                    </th>
                    <th>
                        <span class="ml-2">Tên</span>
                    </th>
                    <th>
                        <span class="ml-2">Giá</span>
                    </th>
                    <th>
                        <span class="ml-4">Hàng động</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-bottom" v-for="(product, index) in products">
                    <td class="align-middle">
                        <div class="p-2">{{ index + 1 }}</div>
                    </td>
                    <td class="align-middle">
                        <div class="p-2 d-flex flex-row align-items-center mb-2">
                            <img :src="`images/products/${product.thumbnail}`" width="40" class="me-3 rounded-circle" />
                            <div class="d-flex flex-column ml-2">
                                <span class="d-block font-weight-bold">{{ product.name }}</span>
                                <small class="text-muted text-truncate" style="width: 250px">{{
                                    product.description
                                    }}</small>
                            </div>
                        </div>
                    </td>
                    <td class="align-middle">
                        <div class="p-2">{{ formatNumber(product.price) }}₫</div>
                    </td>
                    <td class="align-middle">
                        <div class="p-2 icons">
                            <router-link :to="{ name: 'ProductInfo', params: { id: product.id } }"
                                class="edit text-decoration-none">
                                <i class="bi bi-info-lg"></i>
                            </router-link>
                            <router-link :to="{ name: 'ProductEdit', params: { id: product.id } }"
                                class="edit text-decoration-none">
                                <i class="bi bi-pencil text-warning mx-2"></i>
                            </router-link>
                            <button @click="destroy(product.id)" class="delete border-0 bg-white">
                                <i class="bi bi-trash3 text-danger"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
