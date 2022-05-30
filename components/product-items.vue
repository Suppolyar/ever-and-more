<template>
  <div class="lg:grid lg:grid-cols-3 gap-8 px-2 ">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="card-item mb-2 group"
    >
      <div class="space-y-4 mb-4">
        <div class="overflow-hidden w-full h-sm">
          <img
            class="object-containw transform group-hover:scale-105"
            :src="item.photo"
            alt=""
          >
        </div>
        <h2 class="text-white">
          {{ item.title }}
        </h2>
        <p class="text-white">
          {{ item.description }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500 line-through font-bold">{{ item.oldPrice }} ₽</span>
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
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  name: 'ProductItems',
};
</script>

<style scoped>

</style>
