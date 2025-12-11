<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { User } from "../../../services/user.service";

const userModel = new User;
const route = useRoute();
const id = route.params.id;

const user = ref(null);

const getUser = async () => {
  try {
    const res = await userModel.getById(id);
    user.value = res.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

onMounted(async () => {
  getUser();
});
</script>

<template>
  <div class="container rounded" style="padding: 50px 0">
    <div class="bg-white">
      <div class="row align-items-center edit-form" enctype="multipart/form-data" v-if="user">
        <input type="text" hidden name="id" value="<?=$id;?>" />
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
                <label class="labels">Tên</label><input type="text" class="form-control" placeholder="Đồng" name="name"
                  :value="user.name" disabled />
                <p class="field-message mb-0"></p>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Email</label><input type="email" class="form-control"
                  placeholder="example@gmail.com" name="email" :value="user.email" disabled />
                <p class="field-message mb-0"></p>
              </div>
            </div>
            <div class="row mt-2">
              <label for="is_admin" class="labels" style="width: unset">
                Quản trị
              </label>
              <input id="is_admin" type="checkbox" style="width: unset; width: 18px" disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
