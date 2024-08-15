<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { ICartItem, IMenuItem } from '@/types';

const emit = defineEmits(['add-item']);

const menu = ref<IMenuItem[]>([]);

onMounted(async () => {
  const response = await fetch('/src/constants/menu.json');
  const data = await response.json();
  menu.value = data;
});
</script>

<template>
  <aside class="col-md-3">
    <ul class="list-group">
      <li v-for="item in menu" :key="item.id" class="menu-item list-group-item px-2">
        <button
          type="button"
          @click="$emit('add-item', item)"
          class="btn-menu d-flex justify-content-between align-items-center p-0 w-100 border-0 bg-transparent"
        >
          <div class="text-start">
            <span class="fw-bold">{{ item.name }}</span>
            <p class="d-none d-lg-block m-0">{{ item.description }}</p>
          </div>
          <span class="fs-5 text-nowrap">${{ item.price }}</span>
        </button>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.menu-item {
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
}

p {
  font-size: 14px;
}
</style>
