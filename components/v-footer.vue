<template>
  <footer class="w-full bg-brandPurple py-4">
    <nav class="container mx-auto lg:flex flex-row justify-between px-2">
      <div class="flex flex-col items-start space-y-2 text-white mb-4">
        <a href="">О нас</a>
        <a href="">Преимущества</a>
        <a href="">Товары</a>
        <a href="">Наши Клинеты</a>
      </div>
      <div class="flex flex-row items-center space-x-4 mb-4">
        <a href="">
          <img
            class="h-8 w-8"
            src="@/static/svg/vk-svgrepo-com.svg"
            alt=""
          >
        </a>
        <a href="">
          <img
            class="h-8 w-8"
            src="@/static/svg/instagram-logo-svgrepo-com.svg"
            alt=""
          >
        </a>
      </div>
      <div class="flex flex-col lg:items-end">
        <a
          class="flex flex-row space-x-2 items-center"
          href="tel:+79999044985"
        >
          <span class="text-white hover:text-gray-300">+7 (999)-904-49-85</span>
          <img
            class="h-4 w-4"
            src="@/static/svg/telephone-svgrepo-com.svg"
            alt=""
          >
        </a>
        <a
          class="flex flex-row space-x-2 items-center mb-8"
          href="mailto:ever.and.more1@gmail.com"
        >
          <span class="text-white hover:text-gray-300">ever.and.more1@gmail.com</span>
          <img
            class="h-4 w-4"
            src="@/static/svg/mail-svgrepo-com.svg"
            alt=""
          >
        </a>
        <span class="text-white">&#169;Suppolyar</span>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'VFooter',
};
</script>

<style scoped>

</style>
