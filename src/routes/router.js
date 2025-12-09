import { createRouter, createWebHistory } from "vue-router";

// Admin pages
import AdminLayout from "../pages/admin/AdminLayout.vue";
import Dashbroad from "../pages/admin/Dashbroad.vue";
import Products from "../pages/admin/Products.vue";
import ProductAdd from "../pages/admin/ProductAdd.vue";
import ProductEdit from "../pages/admin/ProductEdit.vue";

// Client pages
import DefaultLayout from "../pages/client/DefautLayout.vue";
import Home from "../pages/client/Home.vue";
import Product from "../pages/client/Product.vue";

const routes = [
  // CLIENT
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: Home },
      { path: "product", component: Product },
    ],
  },

  // ADMIN
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "", component: Dashbroad },
      { path: "products", component: Products },
      { path: "products/add", component: ProductAdd },
      { path: "products/edit/:id", component: ProductEdit, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
