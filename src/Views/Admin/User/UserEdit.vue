<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { User } from "../../../services/user.service";

const userModel = new User;
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const user = reactive({
    name: "",
    email: "",
    is_admin: "",
    avatar: "person_1.jpg",
});

const fetchUser = async () => {
    try {
        const res = await userModel.getById(id);
        Object.assign(user, res.data);
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
    }
};

onMounted(() => {
    fetchUser();
});

const update = async (data) => {
    try {
        await userModel.updated(id, data);
        alert("Cập nhật sản phẩm thành công!");
        router.push({ name: "UserIndex" });
    } catch (error) {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
};
</script>

<template>
    <div class="container rounded" style="padding: 50px 0">
        <div class="bg-white">
            <form @submit.prevent="update(user)" class="row align-items-center edit-form" enctype="multipart/form-data">
                <div class="col-md-6 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle" width="250px" id="avatar" :src="`/images/users/${user.avatar}`" />
                    </div>
                </div>
                <div class="col-md-6 border-right">
                    <div class="px-3 pe-lg-5 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Chỉnh sửa thông tin</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Tên</label><input type="text" class="form-control"
                                    placeholder="Đồng" name="name" v-model="user.name" />
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <label class="labels">Email</label><input type="email" class="form-control"
                                    placeholder="example@gmail.com" name="email" v-model="user.email" />
                                <p class="field-message mb-0"></p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <label for="is_admin" class="labels" style="width: unset">
                                Quản trị
                            </label>
                            <input id="is_admin" type="checkbox" style="width: unset; width: 18px" disabled />
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
    </div>
</template>
