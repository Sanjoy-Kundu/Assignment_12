<script setup>
import {ref, reactive, onBeforeMount} from "vue"
import {useRoute} from "vue-router"
const route = useRoute();
const products = ref({})

onBeforeMount(()=>{
  fetch('https://dummyjson.com/products?limits=20')
.then(res => res.json())
.then(data =>{products.value = data.products})

})

import MasterLayout from "../MasterLayout.vue";

</script>
<template>
    <MasterLayout>
        <div class="container">
        <h2>Our Latest Product</h2>
        <table class="table table-striped">
          <tr>
            <th>Serial No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.description }}</td>
            <td>
              <router-link :to="{name:'product', params:{id:product.id}}"><button class="btn btn-warning">Details</button></router-link>
            </td>
          </tr>
        </table>
    </div>
    </MasterLayout>
   
</template>