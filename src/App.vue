<script setup lang="ts">
import DrinkMenu from './components/DrinkMenu.vue';
import CartList from './components/CartList.vue';
import OrderList from './components/OrderList.vue';
</script>

<template>
  <main class="container">
    <header class="p-2 mt-4 rounded-3 bg-primary text-center">
      <h1 class="m-0 fs-3 fw-bold">六角點餐機</h1>
    </header>
    <div class="container mt-4">
      <div class="row">
        <DrinkMenu />
        <CartList />
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
