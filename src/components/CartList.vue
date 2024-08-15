<script setup lang="ts">
import { computed, ref } from 'vue';

import type { ICartItem } from '@/types';

const { cartData } = defineProps<{
  cartData: ICartItem[];
}>();

// 小計
const computedCartData = computed(() => {
  return cartData.map((item) => ({
    ...item,
    subTotal: item.price * item.quantity
  }));
});

const totalPrice = computed(() => {
  return computedCartData.value.reduce((total, item) => total + item.subTotal, 0);
});
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
        <tr v-for="(item, index) in computedCartData" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.price }}</td>
          <td>${{ item.subTotal }}</td>
          <td><button type="button" class="btn btn-outline-danger">X</button></td>
        </tr>
      </tbody>
    </table>
    <h4 class="text-end">總計: ${{ totalPrice }}</h4>
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
