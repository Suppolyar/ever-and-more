<template>
  <section>
    <div class="h-screen mb-16 relative">
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
    <div
      id="about"
      class="container mx-auto mb-16"
    >
      <h1 class="title mb-8">
        О нас
      </h1>
      <div class="md:grid grid-cols-2 gap-x-8">
        <div class="img-container">
          <img
            class="img-inside"
            src="@/static/products/image_8.jpeg"
            alt=""
          >
        </div>
        <div class="px-2">
          <h1 class="logo-title text-center">
            Ever&More
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
    <div class="container mx-auto mb-16">
      <div class="md:grid grid-cols-2 gap-x-8 items-center">
        <div class="px-2 mb-4">
          <p class="text-sm">
            Любой каприз.....
          </p>
          <h2 class="mb-4">
            Уникальность изделий <b>Ever&More</b>
          </h2>
          <p>
            Каждое изделие <b>Ever&More</b> с любовью выполнено вручную в
            единственном экземпляре, с учётом всех пожеланий заказчика.
            Наши кашемировые изделия могут стать ярким акцентом Вашего Casual стиля или
            незаменимым элементом вечернего образа.
            По желанию заказчика кашемировое изделие может быть украшено тончайшим кружевом
            Шантильи, отделано лебяжьим пухом или экзотическими перьями, пайетками и
            бисером или же дополнено другим подходящим элементом отделки
          </p>
        </div>
        <div class="img-container">
          <img
            class="img-inside"
            src="@/static/products/image_10.jpeg"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="container mx-auto mb-16">
      <div class="md:grid grid-cols-2 gap-x-8 items-center">
        <div class="img-container">
          <img
            class="img-inside"
            src="@/static/products/image_12.jpeg"
            alt=""
          >
        </div>
        <div class="px-2">
          <h2 class="mb-4">
            Уникальность упаковки <b>Ever&More</b>
          </h2>
          <p>
            Упаковка разработана и создана по индивидуальному
            проекту <b>Ever&More</b>, с учётом всех особенностей изделий из кашемира.
            Коробка-пенал сочетает в себе эстетику традиций подарочной упаковки,
            практичность системы хранения и нашу заботу о
            каждом кашемировом изделии Ever &More.
            включая рекомендации по уходу.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-brandPurple mb-16">
      <div class="container mx-auto py-8 px-2">
        <h1 class="title text-white mb-8">
          Его величество- Кашемир!
        </h1>
        <p class="text-center text-white">
          Материал, поистине являющийся синонимом роскоши и изысканного вкуса.
          Кашемир обладает уникальными качествами: невероятно нежный, лёгкий и одновременно
          тёплый, гипоаллергенный и абсолютно универсальный.
          Неограниченная палитра цветов и оттенков пряжи позволяет соответствовать
          вкусу даже самого взыскательного эстета и создавать на основе индивидуального проекта
          <b class="text-white">Ever&More</b> уникальное изделие из кашемира.
        </p>
      </div>
    </div>
    <ProductsGrid class="mb-12" />
    <div
      id="benefits"
      class="container mx-auto mb-16"
    >
      <h1 class="title mb-12">
        Преимущества
      </h1>
      <div class="lg:grid grid-cols-2 space-y-8 px-2">
        <div class="col-span-1 lg:text-left">
          <h2 class="mb-2">
            Комфорт
          </h2>
          <p>
            Волокна кашемира намного тоньше шелковых нитей,
            поэтому по мягкости ткань значительно превосходит шелк.
            Меньше остальных материалов подвержен образованию катышков.
          </p>
        </div>
        <div class="col-span-1" />
        <div class="col-span-1" />
        <div class="col-span-1 lg:text-right">
          <h2 class="mb-2">
            Тепло
          </h2>
          <p>
            Низкая теплопроводность волокна делает кашемир удивительно теплым материалом.
            Даже тонкий, почти прозрачный, кашемир сохраняет тепло.
          </p>
        </div>
        <div class="col-span-1 lg:text-left">
          <h2 class="mb-2">
            Здоровье
          </h2>
          <p>
            Кашемировая ткань не вызывает аллергической реакции, так как
            в ней не заводится пылевой клещ. Сохраняя тепло ,
            кашемир уменьшает интенсивность суставных болей.
          </p>
        </div>
      </div>
    </div>
    <div
      id="products"
      class="container mx-auto mb-16"
    >
      <h1 class="title mb-8">
        Наши товары:
      </h1>
      <ProductItems :list="demoProducts" class="mb-8"/>
      <div class="px-2 text-center">
        <nuxt-link to="catalog">
          <button class="bg-brandPurple bg-opacity-70 hover:(bg-opacity-100) text-white rounded-xl px-4 py-2">Посмотреть все</button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

import PRODUCTS from "@/components/products";

export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  data() {
    return {
      PRODUCTS,
    };
  },
  computed: {
    demoProducts() {
      return this.PRODUCTS.slice(0, 3)
    }
  }
};
</script>

<style>
.main-bg {
  background-image: url("~/static/main-bg.jpg");
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fill;
}

.logo-title {
  font-family: 'Pinyon Script', serif;
}
</style>
