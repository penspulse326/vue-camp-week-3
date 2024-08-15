<script setup lang="ts">
import type { ICartItem } from '@/types';
import { ref } from 'vue';

const cartItems = ref<ICartItem[]>([
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    quantity: 1
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    quantity: 1
  }
]);
</script>

<template>
  <div class="col-md-9">
    <table class="table">
      <thead class="table-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">數量</th>
          <th scope="col">單價</th>
          <th scope="col">小計</th>
          <th scope="col">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.price }}</td>
          <td>${{ item.price * item.quantity }}</td>
          <td><button type="button" class="btn btn-outline-danger">X</button></td>
        </tr>
      </tbody>
    </table>
    <h4 class="text-end">
      總計: ${{ cartItems.reduce((total, item) => total + item.price * item.quantity, 0) }}
    </h4>
    <div class="form-floating mt-4">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style="height: 100px"
      ></textarea>
      <label for="floatingTextarea2">備註</label>
    </div>
    <div class="text-end"><button type="button" class="btn btn-primary mt-2">送出訂單</button></div>
  </div>
</template>

<style scoped lang="scss"></style>
