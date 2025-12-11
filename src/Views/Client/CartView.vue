<script setup>
import { ref, onMounted } from "vue";
import { Carts } from "../../services/cart.service";

const cartModel = new Carts;
const carts = ref([]);

const getdata = async () => {
    const result = await cartModel.list();
    if (result.status === 200) {
        carts.value = result.data;
    } else {
        console.error("Lỗi khi lấy data:", error);
    }
}

const destroy = async (id) => {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?")) {
        try {
            await cartModel.delete(id);
            window.location.reload();
        } catch (err) {
            console.error("Lỗi khi xóa:", err);
        }
    }
};

const formatNumber = (num) => {
    return Number(num).toLocaleString("en-US");
};

onMounted(async () => {
    getdata()
});
</script>

<template>
    <div class="container my-5">
        <h2>Giỏ hàng của bạn</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="checkAll">
                    </th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cart in carts">
                    <td>
                        <input type="checkbox" class="checkItem">
                    </td>
                    <td><img :src="`images/products/${cart.image}`"
                            alt="" width="50" height="50"></td>
                    <td>{{ cart.name }}</td>
                    <td>{{ formatNumber(cart.price) }}đ</td>
                    <td><input type="number" class="form-control w-50" :value="cart.quantity"></td>
                    <td>{{ (cart.price * cart.quantity).toLocaleString() }}</td>
                    <td><button @click="destroy(cart.id)" class="btn btn-danger">X</button></td>
                </tr>
            </tbody>
        </table>
        <div class="text-end">
            <h4>Tổng tiền: <span class="text-danger">12.200.000đ</span></h4>
            <button class="btn btn-success btn-lg">Thanh toán</button>
        </div>
    </div>
</template>

<style scoped></style>