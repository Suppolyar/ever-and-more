<template>
  <div class="lg:(grid grid-cols-2) xl:grid-cols-4 gap-8 px-2 ">
    <div
      v-for="(item, index) in PRODUCTS"
      :key="index"
      class="card-item mb-2"
    >
      <div class="space-y-4 mb-4">
        <img
          class="h-sm w-full object-fill"
          :src="item.photo"
          alt=""
        >
        <h2 class="text-white">
          {{ item.title }}
        </h2>
        <p class="text-white">
          {{ item.description }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <span class="text-sm text-gray-300 line-through font-bold">{{ item.oldPrice }} ₽</span>
          <span class="text-xl text-white font-bold">{{ item.price }} ₽</span>
        </div>
        <button class="bg-white hover:(bg-black text-white) rounded-xl px-4 py-2">
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PRODUCTS from './products';

export default {
  name: 'ProductItems',
  data() {
    return {
      PRODUCTS,
    };
  },
};
</script>

<style scoped>

</style>
