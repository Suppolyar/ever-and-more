<template>
  <div>
    <VHeader />
    <Nuxt />
    <VFooter />
  </div>
</template>

<script>
import VHeader from '@/components/v-header';
import VFooter from '@/components/v-footer';

export default {
  name: 'DefaultLayout',
  components: { VHeader, VFooter },
};
</script>

<style scoped>

</style>
