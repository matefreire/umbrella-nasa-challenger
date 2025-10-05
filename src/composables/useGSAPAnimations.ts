import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { GSAPAnimation } from '@/types';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  const isInitialized = ref(false);

  const initScrollTrigger = () => {
    if (isInitialized.value) return;

    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
    });

    isInitialized.value = true;
  };

  const createScrollAnimation = (animation: GSAPAnimation) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animation.element,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    });

    if (animation.from) {
      tl.from(animation.element, {
        ...animation.from,
        duration: animation.duration,
        delay: animation.delay || 0,
        ease: animation.ease || 'power2.out',
      });
    }

    if (animation.to) {
      tl.to(animation.element, {
        ...animation.to,
        duration: animation.duration,
        delay: animation.delay || 0,
        ease: animation.ease || 'power2.out',
      });
    }

    return tl;
  };

  const fadeIn = (element: HTMLElement, duration = 1, delay = 0) => {
    return gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const slideUp = (element: HTMLElement, duration = 1, delay = 0) => {
    return gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const slideLeft = (element: HTMLElement, duration = 1, delay = 0) => {
    return gsap.fromTo(
      element,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const slideRight = (element: HTMLElement, duration = 1, delay = 0) => {
    return gsap.fromTo(
      element,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const scaleIn = (element: HTMLElement, duration = 1, delay = 0) => {
    return gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration,
        delay,
        ease: 'back.out(1.7)',
      }
    );
  };

  const cleanup = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf('*');
  };

  onMounted(() => {
    initScrollTrigger();
  });

  onUnmounted(() => {
    cleanup();
  });

  return {
    initScrollTrigger,
    createScrollAnimation,
    fadeIn,
    slideUp,
    slideLeft,
    slideRight,
    scaleIn,
    cleanup,
  };
}
