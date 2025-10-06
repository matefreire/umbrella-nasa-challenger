<template>
  <div class="landing-page">
    <!-- Header -->
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <a href="#home">
            <img :src="logoImg" alt="UMBRELLA" class="logo-img" />
          </a>
        </div>
        <nav class="nav">
          <a href="#sobre" class="nav-link">Sobre</a>
          <a href="#dados" class="nav-link">Dados</a>
          <a href="#demo" class="nav-link">Demo</a>
          <a href="#equipe" class="nav-link">Equipe</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      id="hero"
      class="relative bg-[#0A1931] min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 md:px-12"
    >
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16"
      >
        <!-- Imagem -->
        <div class="flex justify-center items-center w-full md:w-1/2">
          <div class="relative">
            <div
              class="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl"
            >
              <img
                :src="handPhoneImg"
                alt="Mão segurando celular"
                class="w-56 sm:w-64 md:w-80 drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>

        <!-- Textos -->
        <div
          class="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2"
        >
          <h1
            class="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-2 leading-snug"
          >
            Quando o céu muda, o Umbrella avisa
          </h1>

          <h2
            class="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide mb-6"
          >
            UMBRELLA
          </h2>

          <button
            class="flex items-center gap-2 bg-white text-[#0A1931] font-semibold rounded-full px-6 py-3 text-base sm:text-lg hover:scale-105 hover:shadow-lg transition-all"
          >
            <span
              class="flex justify-center items-center w-6 h-6 rounded-full border border-[#0A1931] text-sm"
            >
              ▶
            </span>
            Conheça
          </button>
        </div>
      </div>
    </section>

    <!-- NASA Data Section -->
    <section id="dados" class="section-white nasa-section">
      <div class="container">
        <h2 class="nasa-title font-londrina-solid">
          Feito com dados reais da NASA.
        </h2>
        <div class="chart-container">
          <PrecipitationChart />
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="demo" class="section-white how-it-works-section">
      <div class="container">
        <div class="how-it-works-content">
          <div class="space-illustration">
            <img
              :src="planetSpaceImg"
              alt="Ilustração espacial"
              class="planet-graphic"
            />
          </div>
          <div class="how-it-works-text">
            <h2 class="how-it-works-title font-londrina-solid">
              Como Funciona
            </h2>
            <p class="how-it-works-subtitle font-poppins">
              De dados espaciais a decisões terrestres.
            </p>

            <!-- Slider de etapas -->
            <div class="steps-slider">
              <div class="steps-content">
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  class="step"
                  :class="{ active: currentStep === index }"
                  v-show="currentStep === index"
                >
                  <h3 class="step-title">{{ step.title }}</h3>
                  <p class="step-description">{{ step.description }}</p>
                </div>
              </div>
              <div class="slider-indicators">
                <button
                  v-for="(step, index) in steps"
                  :key="index"
                  class="indicator"
                  :class="{ active: currentStep === index }"
                  @click="currentStep = index"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- App Screens Section -->
    <section class="section-blue app-screens-section">
      <div class="container">
        <h2
          class="app-screens-title font-londrina-solid text-white text-center text-3xl sm:text-4xl font-bold mb-8"
        >
          Demonstração Interativa
        </h2>
        <AppCarousel />
      </div>
    </section>

    <!-- Team Section -->
    <section id="equipe" class="section-white team-section">
      <div class="container">
        <h2 class="team-title font-londrina-solid">Sobre a Equipe</h2>
        <div class="team-description font-poppins">
          <p>
            Um time apaixonado por dados, design e tecnologia, transformando
            ciência espacial em utilidade humana
          </p>
          <p>Criamos o Umbrella no NASA Space Apps Challenge 2025.</p>
        </div>
        <div class="team-members">
          <div
            v-for="(member, index) in teamMembers"
            :key="index"
            class="member-card"
          >
            <div class="member-photo">
              <img
                :src="member.photo"
                :alt="member.name"
                class="photo-img font-londrina-solid"
              />
            </div>
            <div class="member-info">
              <h3 class="member-name font-poppins">{{ member.name }}</h3>
              <p class="member-role font-poppins">
                {{ member.education }} - {{ member.profession }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <section class="section-blue footer-section">
      <div class="container">
        <div class="footer-content">
          <div class="footer-text">
            <h2 class="footer-title font-londrina-solid">
              Prepare-se para o futuro com o Umbrella
            </h2>
            <a
              href="https://www.figma.com/proto/nncnhElr6XlpVGbFZBnF3o/Nazarentos?node-id=21-169&t=nOwrrSM0o2RTmk60-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=21%3A234&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              class="github-button font-poppins inline-block"
            >
              Acesse Agora
            </a>
          </div>
          <div class="footer-visual">
            <img
              :src="rocketSpaceImg"
              alt="Foguete espacial"
              class="rocket-illustration"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Footer -->
    <footer class="copyright-footer">
      <div class="container">
        <div class="copyright-content">
          <p class="copyright-text font-poppins">
            © 2025 UMBRELLA — Powered by NASA Earth Science Data.
          </p>
          <p class="copyright-text font-poppins">
            Desenvolvido com ❤️ pela equipe Nazarentos durante o NASA Space Apps
            Challenge 2025.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import AppCarousel from '@/components/AppCarousel.vue';
  import PrecipitationChart from '@/components/PrecipitationChart.vue';
  import { useGSAPAnimations } from '@/composables/useGSAPAnimations';
  import { onMounted, ref } from 'vue';

  // Importar imagens
  import logoImg from '@/assets/images/Logo.svg';
  import handPhoneImg from '@/assets/images/hand-phone.svg';
  import planetSpaceImg from '@/assets/images/planet-space.svg';
  import rocketSpaceImg from '@/assets/images/rocket-space.svg';

  // Importar fotos da equipe
  import team1Img from '@/assets/images/team/team1.jpg';
  import team2Img from '@/assets/images/team/team2.jpg';
  import team3Img from '@/assets/images/team/team3.jpg';
  import team4Img from '@/assets/images/team/team4.png';
  import team5Img from '@/assets/images/team/team5.png';

  // Dados do slider "Como Funciona"
  const currentStep = ref(0);
  const steps = ref([
    {
      title: 'Coleta de Dados',
      description:
        'Utilizamos dados reais da NASA para monitorar condições meteorológicas espaciais e terrestres.',
    },
    {
      title: 'Processamento Inteligente',
      description:
        'Nossos algoritmos analisam os dados e identificam padrões climáticos em tempo real.',
    },
    {
      title: 'Previsões Precisas',
      description:
        'Geramos previsões meteorológicas com alta precisão baseadas em dados espaciais.',
    },
    {
      title: 'Notificações Inteligentes',
      description:
        'Você recebe alertas personalizados sobre mudanças climáticas na sua região.',
    },
  ]);

  // Dados das telas do app
  const appScreens = ref([
    { image: '@/assets/images/screen1.png', alt: 'Tela principal do app' },
    { image: '@/assets/images/screen2.png', alt: 'Tela de previsão' },
    { image: '@/assets/images/screen3.png', alt: 'Tela de alertas' },
    { image: '@/assets/images/screen4.png', alt: 'Tela de configurações' },
    { image: '@/assets/images/screen5.png', alt: 'Tela de histórico' },
  ]);

  // Dados da equipe
  const teamMembers = ref([
    {
      name: 'Karoline Novais Rezende',
      education: 'Engenharia de Software',
      profession: 'Desenvolvedora Full-Stack',
      photo: team1Img,
    },
    {
      name: 'Mateus Freire',
      education: 'Engenharia de Software',
      profession: 'Desenvolvedor Full-Stack',
      photo: team2Img,
    },
    {
      name: 'Dara Lemons',
      education: 'Design de Interfaces e Experiência do Usuário',
      profession: 'UX/UI Designer & QA Engineer',
      photo: team3Img,
    },
    {
      name: 'Patricia Neto',
      education: 'Engenharia de Software',
      profession: 'Quality Assurance Specialist',
      photo: team4Img,
    },
    {
      name: 'Vinicius Marini Lopez',
      education: 'Ciência da Computação',
      profession: 'Desenvolvedor Full-Stack',
      photo: team5Img,
    },
  ]);

  // GSAP Animations
  const { fadeIn } = useGSAPAnimations();

  // Auto-play do slider
  let sliderInterval: number | null = null;

  const startSlider = () => {
    sliderInterval = setInterval(() => {
      currentStep.value = (currentStep.value + 1) % steps.value.length;
    }, 4000);
  };

  const stopSlider = () => {
    if (sliderInterval) {
      clearInterval(sliderInterval);
      sliderInterval = null;
    }
  };

  onMounted(() => {
    // Iniciar animações GSAP
    const elements = document.querySelectorAll('.gsap-fade-in');
    elements.forEach((el, index) => {
      fadeIn(el as HTMLElement, 1, index * 0.2);
    });

    // Iniciar slider automático
    startSlider();
  });

  // Cleanup
  onMounted(() => {
    return () => {
      stopSlider();
    };
  });
</script>

<style src="@/assets/landing.css"></style>

<style scoped>
  /* Reset e configurações básicas */
  :root {
    --dark-blue: #0a1931;
    --light-blue: #e0f2f7;
    --green: #69f0ae;
    --orange: #ff8a65;
    --white: #ffffff;
    --gray: #282c34;
  }

  * {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    color: var(--ink);
    background: var(--surface);
    font-family:
      ui-sans-serif,
      'Inter',
      system-ui,
      -apple-system,
      Segoe UI,
      Roboto,
      Arial,
      sans-serif;
  }

  /* ===== Header ===== */
  .header {
    position: relative;
    padding: 0.5rem 0;
  }
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-img {
    height: 28px;
    display: block;
  }

  .nav {
    display: flex;
    gap: 28px;
  }
  .nav-link {
    font-weight: 700;
    text-decoration: none;
    color: var(--white);
    padding: 8px 0;
    position: relative;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transition: 0.2s;
    transform-origin: left;
  }
  .nav-link:hover::after {
    transform: scaleX(1);
  }

  /* ===== Hero ===== */
  .hero-section {
    position: relative;
    min-height: 92vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  /* conteúdo por cima */
  .hero-section .container {
    position: relative;
    z-index: 2;
  }

  .hero-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
  }

  /* Conteúdo textual */
  .hero-text {
    flex: 1;
    max-width: 560px;
  }
  .hero-title {
    margin: 0 0 16px 0;
    font-size: clamp(22px, 2.6vw, 32px);
    line-height: 1.25;
    color: var(--white);
    font-weight: 800;
  }
  .hero-brand {
    margin: 6px 0 22px 0;
    font-size: clamp(54px, 8.2vw, 96px);
    line-height: 1;
    color: var(--white);
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  /* Botão "Conheça" com ícone de play */
  .hero-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px 12px 14px;
    border-radius: 999px;
    background: var(--white);
    border: 2px solid var(--white);
    color: var(--dark-blue);
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    transition:
      transform 0.12s ease,
      box-shadow 0.12s ease;
  }
  .hero-button .play-icon {
    display: inline-grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--dark-blue);
    font-size: 12px;
    line-height: 0;
    translate: 0 0.5px;
  }
  .hero-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
  }

  /* Ilustração com halo */
  .hero-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min(360px, 36vw);
    aspect-ratio: 1/1;
    border-radius: 50%;
    /* halo/spot */
    box-shadow:
      0 0 0 0 rgba(67, 99, 214, 0),
      0 0 120px 40px rgba(54, 79, 198, 0.38) inset,
      0 0 160px 22px rgba(20, 42, 110, 0.45);
    background: radial-gradient(
      60% 60% at 50% 45%,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0) 60%
    );
  }
  .hand-illustration {
    width: 86%;
    filter: drop-shadow(0 18px 34px rgba(0, 0, 0, 0.28));
  }

  /* ===== Responsivo ===== */
  @media (max-width: 992px) {
    .hero-content {
      flex-direction: column;
      gap: 2rem;
    }
    .hero-visual {
      width: min(320px, 44vw);
    }
  }
  @media (max-width: 640px) {
    .header-container {
      padding: 16px 16px;
    }
    .nav {
      gap: 18px;
    }
    .hero-section {
      min-height: 86vh;
    }
    .hero-content {
      flex-direction: column;
      gap: 1.5rem;
    }
    .hero-visual {
      width: min(300px, 74vw);
      opacity: 0.96;
    }
    .hero-title {
      font-size: 18px;
    }
    .hero-brand {
      font-size: clamp(44px, 16vw, 72px);
    }
  }
  .nasa-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--dark-blue);
  }

  .chart-container {
    display: flex;
    justify-content: center;
  }

  .nasa-chart {
    max-width: 800px;
    width: 100%;
    height: auto;
  }

  .how-it-works-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
  }

  .space-illustration {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .planet-graphic {
    max-width: 400px;
    width: 100%;
    height: auto;
  }

  .how-it-works-text {
    flex: 1;
  }

  .how-it-works-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--dark-blue);
    margin-bottom: 1rem;
  }

  .how-it-works-subtitle {
    font-size: 1.2rem;
    color: var(--dark-blue);
    margin-bottom: 2rem;
  }

  .steps-slider {
    margin-top: 2rem;
  }

  .steps-content {
    margin-bottom: 2rem;
    min-height: 120px;
  }

  .step {
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.5s ease;
  }

  .step.active {
    opacity: 1;
    transform: translateX(0);
  }

  .step-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--dark-blue);
    margin-bottom: 0.5rem;
  }

  .step-description {
    font-size: 1rem;
    color: var(--dark-blue);
    line-height: 1.6;
  }

  .slider-indicators {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: #cccccc;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .indicator.active {
    background: var(--green);
    transform: scale(1.2);
  }

  /* App Screens Section */

  .app-screens-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
  }

  .screens-carousel {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .screen-item {
    flex: 0 0 200px;
  }

  .screen-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }

  .screen-image:hover {
    transform: translateY(-10px);
  }

  /* Team Section */

  .team-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--dark-blue);
  }

  .team-description {
    margin-bottom: 3rem;
  }

  .team-description p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: var(--dark-blue);
  }

  .team-members {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .member-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: var(--green);
    padding: 1.5rem;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .member-card:hover {
    transform: translateX(10px);
  }

  .member-photo {
    flex-shrink: 0;
  }

  .photo-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  .member-info {
    flex: 1;
  }

  .member-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--dark-blue);
    margin-bottom: 0.5rem;
  }

  .member-role {
    font-size: 1rem;
    color: var(--dark-blue);
  }

  /* Footer Section */

  .footer-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .footer-text {
    flex: 1;
  }

  .footer-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 2rem;
  }

  .github-button {
    background: var(--white);
    color: var(--dark-blue);
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .github-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
  }

  .footer-visual {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .rocket-illustration {
    max-width: 300px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 15px;
    }

    .hero-section {
      padding-top: 60px;
    }

    .hero-text {
      background: var(--white);
      padding: 1.5rem;
      margin: 1rem;
      border-radius: 15px;
    }

    .hero-title {
      font-size: 1.5rem;
      line-height: 1.3;
    }

    .hero-brand {
      font-size: 2.5rem;
    }

    .hand-illustration {
      max-width: 250px;
    }

    .nasa-title,
    .how-it-works-title,
    .app-screens-title,
    .team-title,
    .footer-title {
      font-size: 2rem;
    }
  }
</style>
