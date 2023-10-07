import {createRouter, createWebHistory} from "vue-router"

import ProductList from "../components/ProductList.vue"
import Product from "../components/Product.vue"
import MasterLayout from "../MasterLayout.vue"
import Home from "../components/Home.vue"


const routes = [
    {path:"/", components:{default:Home, sideBar:MasterLayout}, name:"home"},
{path: "/productLists", components:{ default:ProductList,sideBar:MasterLayout},name:"productLists"},
{path:"/product/:id", components:{default:Product, sideBar:MasterLayout}, name:"product"},
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router