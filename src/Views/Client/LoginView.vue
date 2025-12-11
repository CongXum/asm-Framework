<script setup>
</script>

<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h4 class="mb-0">Đăng nhập</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="nhập email">
                            </div>
                            <div class="mb-3">
                                <label>Mật khẩu</label>
                                <input type="password" class="form-control" placeholder="nhập mật khẩu">
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
                        </form>
                        <div class="text-center mt-3">
                            Chưa có tài khoản? <router-link to="/register">Đăng ký ngay</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>