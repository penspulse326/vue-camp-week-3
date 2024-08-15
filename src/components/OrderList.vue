<script setup lang="ts"></script>

<template>
  <ul class="row gap-3 mb-4">
    <li class="col-md-4 p-3 border rounded">
      <h4 class="fw-bold">訂單</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">品項</th>
            <th scope="col">數量</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>珍珠奶茶</td>
            <td>1</td>
            <td>$50</td>
          </tr>
        </tbody>
      </table>
      <p>備註：</p>
      <h5 class="text-end">總計: $50</h5>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
}
</style>
