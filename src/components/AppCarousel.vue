<template>
  <div
    class="relative w-full overflow-hidden py-8 sm:py-12 min-h-[400px] md:min-h-[500px] px-4"
    @mouseenter="pauseCarousel"
    @mouseleave="resumeCarousel"
  >
    <!-- Container do carrossel -->
    <div
      class="relative w-full cursor-grab active:cursor-grabbing"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @touchstart="startTouch"
      @touchmove="onTouch"
      @touchend="endTouch"
    >
      <!-- Faixa de imagens -->
      <div
        class="flex transition-transform duration-700 ease-in-out select-none"
        :style="{
          transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
        }"
        ref="carouselContainer"
      >
        <!-- Duplicar imagens para criar loop infinito -->
        <div
          v-for="(image, index) in [...images, ...images]"
          :key="`${index}-${Math.floor(index / images.length)}`"
          class="flex-shrink-0 px-2 flex justify-center items-center h-full"
          :class="{
            'w-1/2 md:w-1/4': true,
          }"
        >
          <img
            :src="image"
            :alt="`App Screenshot ${(index % images.length) + 1}`"
            class="rounded-lg shadow-lg bg-gray-200 w-[85%] md:w-[85%] h-auto object-contain transition-transform duration-500 hover:scale-125 hover:shadow-2xl"
          />
        </div>
      </div>

      <!-- Botões de navegação -->
      <button
        @click="previousSlide"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 hover:scale-110"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 hover:scale-110"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  // Importar imagens do app
  import app1 from '@/assets/images/app/app1.png';
  import app10 from '@/assets/images/app/app10.png';
  import app11 from '@/assets/images/app/app11.png';
  import app12 from '@/assets/images/app/app12.png';
  import app13 from '@/assets/images/app/app13.png';
  import app14 from '@/assets/images/app/app14.png';
  import app2 from '@/assets/images/app/app2.png';
  import app3 from '@/assets/images/app/app3.png';
  import app4 from '@/assets/images/app/app4.png';
  import app5 from '@/assets/images/app/app5.png';
  import app6 from '@/assets/images/app/app6.png';
  import app7 from '@/assets/images/app/app7.png';
  import app8 from '@/assets/images/app/app8.png';
  import app9 from '@/assets/images/app/app9.png';

  // quantidade de imagens visíveis por vez (2 no mobile, 4 no desktop)
  const visibleImages = ref(2);

  // array de imagens
  const images = [
    app1,
    app2,
    app3,
    app4,
    app5,
    app6,
    app7,
    app8,
    app9,
    app10,
    app11,
    app12,
    app13,
    app14,
  ];

  const currentIndex = ref(0);
  let interval: ReturnType<typeof setInterval> | null = null;

  // Variáveis para funcionalidade de arrastar
  const isDragging = ref(false);
  const startX = ref(0);
  const currentX = ref(0);
  const carouselContainer = ref<HTMLElement | null>(null);

  // Variáveis para touch
  const isTouching = ref(false);
  const startTouchX = ref(0);
  const currentTouchX = ref(0);

  // Atualizar quantidade de imagens visíveis baseado no tamanho da tela
  const updateVisibleImages = () => {
    if (window.innerWidth >= 768) {
      visibleImages.value = 4; // desktop
    } else {
      visibleImages.value = 2; // mobile
    }
  };

  // Funções para arrastar com mouse
  const startDrag = (e: MouseEvent) => {
    isDragging.value = true;
    startX.value = e.clientX;
    currentX.value = e.clientX;
    pauseCarousel();
  };

  const onDrag = (e: MouseEvent) => {
    if (!isDragging.value) return;
    e.preventDefault();
    currentX.value = e.clientX;
  };

  const endDrag = () => {
    if (!isDragging.value) return;

    const diffX = startX.value - currentX.value;
    const threshold = 50; // Distância mínima para considerar como arrastar

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    isDragging.value = false;
    resumeCarousel();
  };

  // Funções para touch (mobile)
  const startTouch = (e: TouchEvent) => {
    isTouching.value = true;
    startTouchX.value = e.touches[0].clientX;
    currentTouchX.value = e.touches[0].clientX;
    pauseCarousel();
  };

  const onTouch = (e: TouchEvent) => {
    if (!isTouching.value) return;
    e.preventDefault();
    currentTouchX.value = e.touches[0].clientX;
  };

  const endTouch = () => {
    if (!isTouching.value) return;

    const diffX = startTouchX.value - currentTouchX.value;
    const threshold = 50; // Distância mínima para considerar como arrastar

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    isTouching.value = false;
    resumeCarousel();
  };

  const startCarousel = () => {
    interval = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const pauseCarousel = () => {
    if (interval) clearInterval(interval);
  };

  const resumeCarousel = () => {
    startCarousel();
  };

  const nextSlide = () => {
    currentIndex.value = currentIndex.value + 1;

    // Quando chegar no final da primeira sequência, resetar para o início
    if (currentIndex.value >= images.length) {
      setTimeout(() => {
        currentIndex.value = 0;
      }, 700); // Aguardar a transição terminar
    }
  };

  const previousSlide = () => {
    if (currentIndex.value === 0) {
      // Se estiver no início, ir para o final da segunda sequência
      currentIndex.value = images.length;
      setTimeout(() => {
        currentIndex.value = images.length - 1;
      }, 700);
    } else {
      currentIndex.value = currentIndex.value - 1;
    }
  };

  onMounted(() => {
    updateVisibleImages();
    startCarousel();
    window.addEventListener('resize', updateVisibleImages);
  });

  onBeforeUnmount(() => {
    pauseCarousel();
    window.removeEventListener('resize', updateVisibleImages);
  });
</script>
