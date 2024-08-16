<script setup lang="ts">
import type { IOrder } from '@/types';

const props = defineProps<{
  data: IOrder[];
}>();
</script>

<template>
  <h2>歷史訂單</h2>
  <div v-for="order in props.data" :key="order.id" class="col-md-6 col-lg-4">
    <div class="card p-3">
      <h4 class="fw-bold">訂單</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">品項</th>
            <th scope="col" class="text-nowrap">數量</th>
            <th scope="col" class="text-nowrap">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in order.items" :key="item.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.subTotal }}</td>
          </tr>
        </tbody>
      </table>
      <p>備註：</p>
      <h5 class="text-end">總計: ${{ order.totalPrice }}</h5>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
