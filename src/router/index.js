import Vue from "vue";
import Router from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Router);
Vue.use(ElementUI);
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Shopping = () => import("../views/shopping/Shopping");
const Profile = () => import("../views/profile/Profile");
const Login = () => import("../views/login/Login");
const Register = () => import("../views/register/Register");

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "多快好省，购物上VShop -- VShop商城"
    }
  },
  {
    path: "/category",
    name: "category",
    component: Category,
    meta: {
      title: "VShop商品分类 -- VShop商城"
    }
  },
  {
    path: "/store",
    name: "store",
    component: Shopping,
    meta: {
      title: "购物车 -- VShop商城"
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: "我的信息 -- VShop商城"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录 -- VShop商城"
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "注册 -- VShop商城"
    }
  }
];
const router = new Router({
  routes,
  mode: "history"
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});
export default router;
