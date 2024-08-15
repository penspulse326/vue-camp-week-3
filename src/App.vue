<script setup lang="ts">
import DrinkMenu from './components/DrinkMenu.vue';
import CartList from './components/CartList.vue';
import OrderList from './components/OrderList.vue';
import { ref, watch } from 'vue';
import type { ICartItem } from './types';

const cartData = ref<ICartItem[]>([]);

const addItem = (item: ICartItem) => {
  const id = item.id;

  if (cartData.value.some((item) => item.id === id)) {
    alert('已加入購物車');
    return;
  }

  const newItem = { ...item, quantity: 1 };
  cartData.value.push(newItem);
};

watch(cartData, () => {
  console.log(cartData.value);
});
</script>

<template>
  <main class="container">
    <header class="p-2 mt-4 rounded-3 bg-primary text-center">
      <h1 class="m-0 fs-3 fw-bold">六角點餐機</h1>
    </header>
    <div class="container mt-4">
      <div class="row">
        <DrinkMenu :cartData="cartData" @add-item="addItem" />
        <CartList :cartData="cartData" />
      </div>
      <hr />
      <div class="row">
        <h2>歷史訂單</h2>
        <OrderList />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: block;

  margin: 0 auto;
  height: 100dvh;
}
</style>
