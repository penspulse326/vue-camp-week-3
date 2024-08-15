<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ICartItem } from '@/types';

const props = defineProps<{
  cart: ICartItem[];
}>();
const emit = defineEmits(['remove-item']);

// 將 cart 加入小計
const computedcart = computed(() => {
  const data = props.cart.map((item) => ({
    ...item,
    subTotal: item.price * item.quantity
  }));
  return data;
});

const totalPrice = computed(() => {
  const total = computedcart.value.reduce((total, item) => total + item.subTotal, 0);
  return total;
});

const emitRemoveItem = (id: number) => {
  emit('remove-item', id);
};
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
      <tbody v-if="computedcart.length">
        <tr v-for="(item, index) in computedcart" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.price }}</td>
          <td>${{ item.subTotal }}</td>
          <td>
            <button type="button" @click="emitRemoveItem(item.id)" class="btn btn-link">X</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="7" class="text-center">
            <span class="fs-4">購物車是空的QAQ</span>
          </td>
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
    <div class="text-end">
      <button type="button" class="btn btn-primary mt-2">送出訂單</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
th,
td {
  vertical-align: middle;
}
</style>
