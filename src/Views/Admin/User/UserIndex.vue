<script setup>
import { onMounted, ref } from "vue";
import { User } from "../../../services/user.service";

const userModel = new User;
const users = ref([]);

const getdata = async () => {
    const result = await userModel.list();
    if (result.status === 200) {
        users.value = result.data;
    } else {
        console.error("Lỗi khi lấy data:", error);
    }
}

const destroy = async (id) => {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
        try {
            await userModel.delete(id);
            window.location.reload();
        } catch (err) {
            console.error("Lỗi khi xóa:", err);
        }
    }
};

onMounted(async () => {
    getdata()
});
</script>

<template>
    <div class="d-flex justify-content-between align-items">
        <h4>Danh sách Người dùng</h4>
        <router-link to="/userAdd"  class="btn btn-outline-primary">
            Thêm Người dùng
        </router-link>
    </div>

    <div class="mt-3">
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
                            <span class="ml-2">Vai trò</span>
                        </th>
                        <th>
                            <span class="ml-4">Hàng động</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-bottom" v-for="(user, index) in users">
                        <td>
                            <div class="p-2">{{ index + 1 }}</div>
                        </td>
                        <td>
                            <div class="p-2 d-flex flex-row align-items-center mb-2">
                                <img :src="`/images/users/${user.avatar}`" width="40" class="me-3 rounded-circle" />
                                <div class="d-flex flex-column ml-2">
                                    <span class="d-block font-weight-bold">{{ user.name }}</span>
                                    <small class="text-muted">{{ user.email }}</small>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="p-2 d-flex flex-column">
                                <span> {{ user.is_admin ? "Admin" : "Khách hàng" }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="p-2 icons">
                                <router-link :to="{ name: 'UserInfo', params: { id: user.id } }"
                                    class="edit text-decoration-none">
                                    <i class="bi bi-info-lg"></i>
                                </router-link>
                                <router-link :to="{ name: 'UserEdit', params: { id: user.id } }"
                                    class="edit text-decoration-none">
                                    <i class="bi bi-pencil text-warning mx-2"></i>
                                </router-link>
                                <button @click="destroy(user.id)" class="delete border-0 bg-white">
                                    <i class="bi bi-trash3 text-danger"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
