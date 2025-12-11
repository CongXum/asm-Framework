<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { User } from "../../../services/user.service";

const userModel = new User;
const router = useRouter();
const user = reactive({
  name: "",
  email: "",
  password: "",
  is_admin: "",
  avatar: "person_1.jpg",
});

async function store() {
  try {
    await userModel.create(user);
    router.push({ name: "UserIndex" });
  } catch (err) {
    console.error("Lỗi khi thêm dữ liệu:", err);
  }
}
</script>

<template>
  <div class="container rounded" style="padding: 50px 0">
    <div class="bg-white">
      <form
        @submit.prevent="store"
        method="post"
        class="row align-items-center sign-up-form"
        enctype="multipart/form-data">
        <div class="col-md-6 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle"
              width="250px"
              id="avatar"
              src="/images/users/default-user-image.webp"
            />
          </div>
        </div>

        <div class="col-md-6 border-right">
          <div class="px-3 ps-lg-5 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Thêm người dùng</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Tên</label>
                <input type="text"
                  class="form-control"
                  placeholder="VD: ExtaZzZ"
                  name="name"
                  v-model="user.name"/>
                <p class="field-message mb-0"></p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Email</label>
                <input type="email"
                  class="form-control"
                  placeholder="VD: example@gmail.com"
                  name="email"
                  v-model="user.email"/>
                <p class="field-message mb-0"></p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Nhập mật khẩu tại đây"
                  v-model="user.password"
                />
                <p class="field-message mb-0"></p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  name="confirm-password"
                  placeholder="Nhập xác nhận mật khẩu tại đây"
                />
                <p class="field-message mb-0"></p>
              </div>
            </div>
            <div class="mt-5 text-center">
              <button
                class="btn btn-primary profile-button"
                style="background-color: #333"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
