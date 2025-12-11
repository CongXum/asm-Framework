<script setup>
</script>

<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-success text-white">
                        <h4 class="mb-0">Đăng ký tài khoản</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label>Họ tên</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label>Số điện thoại</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Email</label>
                                <input type="email" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label>Mật khẩu</label>
                                <input type="password" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label>Nhập lại mật khẩu</label>
                                <input type="password" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-success w-100">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>