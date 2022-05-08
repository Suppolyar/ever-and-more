<template>
  <header>
    <div class="hidden lg:block w-full bg-brandPurple">
      <nav class="container flex flex-row justify-between mx-auto py-4">
        <div class="flex flex-row items-center space-x-8 text-white">
          <NuxtLink
            to="/"
            class="logo-title text-5xl text-white text-center"
          >
            Ever&More
          </NuxtLink>
          <a href="#about">О нас</a>
          <a href="#benefits">Преимущества</a>
          <a href="#products">Товары</a>
          <a href="">Наши Клинеты</a>
        </div>
        <div class="flex flex-col items-end">
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
            class="flex flex-row space-x-2 items-center"
            href="mailto:ever.and.more1@gmail.com"
          >
            <span class="text-white hover:text-gray-300">ever.and.more1@gmail.com</span>
            <img
              class="h-4 w-4"
              src="@/static/svg/mail-svgrepo-com.svg"
              alt=""
            >
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
};
</script>

<style scoped>

</style>
