import { createRouter, createWebHistory } from 'vue-router'

// Client
import DefaulLayout from '../Views/Client/DefaulLayout.vue'
import HomeView from '../Views/Client/HomeView.vue'
import ProductListView from '../Views/Client/ProductListView.vue'
import ProductDetailView from '../Views/Client/ProductDetailView.vue'
import ContactView from '../Views/Client/ContactView.vue'
import CartView from '../Views/Client/CartView.vue'
import LoginView from '../Views/Client/LoginView.vue'
import RegisterView from '../Views/Client/RegisterView.vue'

// Admin
import Dashboard from '../Views/Admin/Dashboard.vue'
import HomeAdmin from '../Views/Admin/Home/HomeAdmin.vue'

// Product Admin
import ProductIndex from "../Views/Admin/Products/ProductIndex.vue";
import ProductAdd from "../Views/Admin/Products/ProductAdd.vue";
import ProductEdit from "../Views/Admin/Products/ProductEdit.vue";
import ProductInfo from "../Views/Admin/Products/ProductInfo.vue";

// User Admin
import UserIndex from "../Views/Admin/User/UserIndex.vue";
import UserAdd from "../Views/Admin/User/UserAdd.vue";
import UserInfo from "../Views/Admin/User/UserInfo.vue";
import UserEdit from "../Views/Admin/User/UserEdit.vue";

const routes = [
    {
        path: '/',
        component: DefaulLayout,
        children: [
            { path: '/', component: HomeView },
            { path: '/detail/:id', name:'detail', component: ProductDetailView },
            { path: '/contact', component: ContactView },
            { path: '/product', component: ProductListView },
            { path: '/cart', component: CartView },
            { path: '/register', component: RegisterView },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/admin',
        component: Dashboard,
        children: [
            { path: '/admin', component: HomeAdmin },
            // Product
            { path: '/productAdmin', name: 'ProductIndex', component: ProductIndex },
            { path: '/productEdit/:id', name: 'ProductEdit', component: ProductEdit },
            { path: '/productAdd', name: 'ProductAdd', component: ProductAdd },
            { path: '/productInfo/:id', name: 'ProductInfo', component: ProductInfo },

            // User
            { path: '/user', name: 'UserIndex', component: UserIndex },
            { path: '/userEdit/:id', name: 'UserEdit', component: UserEdit },
            { path: '/userAdd', name:'UserAdd', component: UserAdd },
            { path: '/userInfo/:id', name: 'UserInfo', component: UserInfo },
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})