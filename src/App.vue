<script setup lang="ts">
import DrinkMenu from './components/DrinkMenu.vue';
import CartList from './components/CartList.vue';
import OrderList from './components/OrderList.vue';
import { onMounted, ref } from 'vue';
import type { ICartItem, IMenuItem } from './types';

const menu = ref<IMenuItem[]>([]);
const cart = ref<ICartItem[]>([]);

const addItem = (id: number) => {
  if (cart.value.some((item) => item.id === id)) {
    alert('已加入購物車');
    return;
  }

  const targetItem: IMenuItem = menu.value.find((item) => item.id === id)!;
  const newItem: ICartItem = { ...targetItem, quantity: 1, subTotal: targetItem.price };
  cart.value.push(newItem);
};

const removeItem = (id: number) => {
  cart.value = cart.value.filter((item) => item.id !== id);
};

const updateQuantity = (id: number, quantity: number) => {
  const targetItem: ICartItem = cart.value.find((item) => item.id === id)!;
  targetItem.quantity = quantity;
  targetItem.subTotal = targetItem.price * quantity;

  console.log(cart.value);
};

// 載入菜單
onMounted(async () => {
  const response = await fetch('/src/constants/menu.json');
  const data = await response.json();
  menu.value = data;
});
</script>

<template>
  <main class="container">
    <header class="p-2 mt-4 rounded-3 bg-primary text-center">
      <h1 class="m-0 fs-3 fw-bold">六角點餐機</h1>
    </header>
    <div class="container mt-4">
      <div class="row">
        <DrinkMenu :menu="menu" :cart="cart" @add-item="addItem" />
        <CartList :cart="cart" @remove-item="removeItem" @update-quantity="updateQuantity" />
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
