<script setup>

</script>

<template>
    <main>
        <div class="container-fluid">

            <!-- Tiêu đề + bộ lọc -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="fw-bold text-dark">Dashboard</h2>
                <select class="form-select w-auto">
                    <option>Tháng 12/2025</option>
                    <option>Tháng 11/2025</option>
                </select>
            </div>

            <!-- 4 ô thống kê lớn -->
            <div class="row g-4 mb-5">
                <div class="col-xl-3 col-md-6">
                    <div class="stat-card border-start border-primary border-5">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="text-muted">Doanh thu hôm nay</h6>
                                <h3 class="mb-0 text-primary">₫68.450.000</h3>
                                <small class="text-success">+12.5% so với hôm qua</small>
                            </div>
                            <i class="bi bi-currency-exchange fs-1 text-primary opacity-75"></i>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="stat-card border-start border-success border-5">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="text-muted">Đơn hàng mới</h6>
                                <h3 class="mb-0 text-success">142</h3>
                                <small class="text-success">+8% so với hôm qua</small>
                            </div>
                            <i class="bi bi-cart-check fs-1 text-success opacity-75"></i>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="stat-card border-start border-warning border-5">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="text-muted">Khách hàng mới</h6>
                                <h3 class="mb-0 text-warning">89</h3>
                                <small class="text-success">+23%</small>
                            </div>
                            <i class="bi bi-person-plus fs-1 text-warning opacity-75"></i>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="stat-card border-start border-info border-5">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="text-muted">Sản phẩm còn</h6>
                                <h3 class="mb-0 text-info">1.248</h3>
                                <small class="text-danger">-5%</small>
                            </div>
                            <i class="bi bi-box-seam fs-1 text-info opacity-75"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Biểu đồ + Bảng -->
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card shadow border-0">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">Doanh thu 7 ngày gần nhất</h5>
                        </div>
                        <div class="card-body p-4">
                            <div class="chart-placeholder">
                                BIỂU ĐỒ DOANH THU (Hình tĩnh)
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card shadow border-0">
                        <div class="card-header bg-white d-flex justify-content-between">
                            <h5 class="mb-0">Đơn hàng mới nhất</h5>
                            <a href="#" class="small text-primary text-decoration-none">Xem tất cả</a>
                        </div>
                        <div class="card-body p-0">
                            <table class="table table-hover mb-0 align-middle">
                                <tbody>
                                    <tr>
                                        <td>#DH001248</td>
                                        <td>Nguyễn Văn A</td>
                                        <td class="text-success fw-bold">₫2.350.000</td>
                                        <td><span class="badge bg-warning">Đang xử lý</span></td>
                                    </tr>
                                    <tr>
                                        <td>#DH001247</td>
                                        <td>Trần Thị B</td>
                                        <td class="text-success fw-bold">₫890.000</td>
                                        <td><span class="badge bg-success">Đã giao</span></td>
                                    </tr>
                                    <tr>
                                        <td>#DH001246</td>
                                        <td>Lê Văn C</td>
                                        <td class="text-success fw-bold">₫5.120.000</td>
                                        <td><span class="badge bg-info">Đang giao</span></td>
                                    </tr>
                                    <tr>
                                        <td>#DH001245</td>
                                        <td>Phạm Thị D</td>
                                        <td class="text-success fw-bold">₫1.450.000</td>
                                        <td><span class="badge bg-danger">Hủy</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<style scoped>
main {
    min-height: 100vh;
}

/* Card thống kê */
.stat-card {
    background: white;
    border-radius: 16px;
    padding: 1.8rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s;
}

.stat-card:hover {
    transform: translateY(-8px);
}

/* Biểu đồ giả (chỉ hình ảnh tĩnh) */
.chart-placeholder {
    background: linear-gradient(45deg, #e3f2fd, #bbdefb);
    border-radius: 12px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1976d2;
    font-size: 1.4rem;
    font-weight: bold;
}

@media (max-width: 992px) {
    .sidebar {
        margin-left: -280px;
    }

    main {
        margin-left: 0 !important;
    }
}
</style>