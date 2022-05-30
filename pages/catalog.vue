<template>
  <main>
    <div class="container mx-auto py-16">
      <ProductItems :list="PRODUCTS" class="mb-8"/>
    </div>
  </main>
</template>

<script>
import PRODUCTS from "@/components/products";

export default {
  name: "CatalogPage",
  layout: 'DefaultLayout',
  data() {
    return {
      PRODUCTS,
    };
  },
}
</script>

<style scoped>

</style>
