<template>
  <section>
    <div class="h-screen mb-12 relative">
      <img class="main-bg w-full h-full absolute top-0 left-0">
      <div class="bg-black bg-opacity-70 w-full h-full absolute top-0 left-0" />
      <div class="absolute w-full top-1/3">
        <h1 class="logo-title text-white text-center">
          Ever&More
        </h1>
        <h3 class="text-white text-center">
          Covered By Love
        </h3>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <h1 class="title mb-8">
        О нас
      </h1>
      <div class="md:grid grid-cols-2 gap-x-8">
        <div class="rounded-xl overflow-hidden shadow-lg transform hover:shadow-2xl mb-8">
          <img
            class="max-h-md w-full object-cover transform hover:scale-110"
            src="@/static/products/image_8.jpeg"
            alt=""
          >
        </div>
        <div>
          <h1 class="logo-title text-center">
            Ever &More
          </h1>
          <p class="text-center">
            Великолепные кашемирные изделия ручной работы
          </p>
          <hr class="my-8">
          <p class="text-center">
            <i>Нежный... Тёплый... Невесомый... Любимый... Мой...</i>
          </p>
          <br>
          <p>
            С <b>Ever&More</b> эпитеты и мечты приобретают реальные черты
            эксклюзивных изделий из высококачественной
            кашемировой пряжи от лучших европейских брэндов,
            таких как <i>Loro Piana, Zegna Baruffa, Biagioli Modesto, Cariaggi, Todd&Duncan etc.</i>
          </p>
        </div>
      </div>
    </div>
    <hr>
    <div class="container mx-auto pb-20 px-4">
      <h1 class="title mb-8">
        Его величество- Кашемир!
      </h1>
      <p class="text-center">
        Материал, поистине являющийся синонимом роскоши и изысканного вкуса.
        Кашемир обладает уникальными качествами: невероятно нежный, лёгкий и одновременно
        тёплый, гипоаллергенный и абсолютно универсальный.
        Неограниченная палитра цветов и оттенков пряжи позволяет соответствовать
        вкусу даже самого взыскательного эстета и создавать на основе индивидуального проекта
        <b>Ever&More</b> уникальное изделие из кашемира.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
};
</script>

<style>
.main-bg {
  background-image: url("~/static/main-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: fill;
}

.logo-title {
  font-family: 'Pinyon Script', serif;
}
</style>
