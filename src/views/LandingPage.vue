<template>
  <div class="landing-page">
    <!-- Header -->
    <header class="header">
      <div class="container">
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
    <section id="hero" class="hero-section">
      <div class="hero-background">
        <div class="stars"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-visual">
            <img
              :src="handPhoneImg"
              alt="Mão segurando celular"
              class="hand-illustration"
            />
          </div>
          <div class="hero-text">
            <h1 class="hero-title">Quando o céu muda, o Umbrella avisa</h1>
            <h2 class="hero-brand">UMBRELLA</h2>
            <button class="hero-button">
              <span class="play-icon">▶</span>
              Conheça
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- NASA Data Section -->
    <section id="dados" class="nasa-section">
      <div class="container">
        <h2 class="nasa-title">Feito com dados reais da NASA.</h2>
        <div class="chart-container">
          <img
            :src="nasaChartImg"
            alt="Gráfico de dados da NASA"
            class="nasa-chart"
          />
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="demo" class="how-it-works-section">
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
            <h2 class="how-it-works-title">Como Funciona</h2>
            <p class="how-it-works-subtitle">
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
    <section class="app-screens-section">
      <div class="container">
        <h2 class="app-screens-title">Telas do app</h2>
        <div class="screens-carousel">
          <div
            v-for="(screen, index) in appScreens"
            :key="index"
            class="screen-item"
          >
            <img :src="screen.image" :alt="screen.alt" class="screen-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="equipe" class="team-section">
      <div class="container">
        <h2 class="team-title">Sobre a Equipe</h2>
        <div class="team-description">
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
              <img :src="member.photo" :alt="member.name" class="photo-img" />
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">
                {{ member.education }} - {{ member.profession }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <section class="footer-section">
      <div class="footer-background">
        <div class="stars"></div>
      </div>
      <div class="container">
        <div class="footer-content">
          <div class="footer-text">
            <h2 class="footer-title">
              Prepare-se para o futuro com o Umbrella
            </h2>
            <button class="github-button">Ver no Github</button>
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
  </div>
</template>

<script setup lang="ts">
  import { useGSAPAnimations } from '@/composables/useGSAPAnimations';
  import { onMounted, ref } from 'vue';

  // Importar imagens
  import logoImg from '@/assets/images/Logo.svg';
  import handPhoneImg from '@/assets/images/hand-phone.svg';
  import nasaChartImg from '@/assets/images/nasa-chart.svg';
  import planetSpaceImg from '@/assets/images/planet-space.svg';
  import rocketSpaceImg from '@/assets/images/rocket-space.svg';

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
      name: 'Ana Silva',
      education: 'Ciência da Computação',
      profession: 'Desenvolvedora Full Stack',
      photo: '@/assets/images/team1.jpg',
    },
    {
      name: 'Carlos Santos',
      education: 'Engenharia de Dados',
      profession: 'Cientista de Dados',
      photo: '@/assets/images/team2.jpg',
    },
    {
      name: 'Maria Oliveira',
      education: 'Design Gráfico',
      profession: 'UI/UX Designer',
      photo: '@/assets/images/team3.jpg',
    },
    {
      name: 'João Costa',
      education: 'Meteorologia',
      profession: 'Especialista em Clima',
      photo: '@/assets/images/team4.jpg',
    },
    {
      name: 'Lucas Ferreira',
      education: 'Engenharia de Software',
      profession: 'Arquiteto de Software',
      photo: '@/assets/images/team5.jpg',
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    pointer-events: none;
  }

  .header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
  }

  .nav {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--white);
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: var(--green);
  }

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 80px;
    overflow: hidden;
    color: var(--white);
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .stars {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background-image:
      radial-gradient(2px 2px at 20px 30px, var(--white), transparent),
      radial-gradient(2px 2px at 40px 70px, var(--white), transparent),
      radial-gradient(1px 1px at 90px 40px, var(--white), transparent),
      radial-gradient(1px 1px at 130px 80px, var(--white), transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    opacity: 0.8;
  }

  .hero-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .hero-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
  }

  .hand-illustration {
    max-width: 400px;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  }

  .hero-text {
    flex: 1;
    color: var(--dark-blue);
    background: var(--light-blue);
    padding: 3rem;
    border-radius: 20px;
    margin-left: 2rem;
    position: relative;
    z-index: 3;
  }

  .hero-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: var(--dark-blue);
  }

  .hero-brand {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    letter-spacing: 0.1em;
    color: var(--dark-blue);
  }

  .hero-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--dark-blue);
    border: 2px solid var(--dark-blue);
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .hero-button:hover {
    background: var(--dark-blue);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(10, 25, 49, 0.3);
  }

  .play-icon {
    width: 20px;
    height: 20px;
    background: var(--dark-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: var(--white);
  }

  .hero-button:hover .play-icon {
    background: var(--white);
    color: var(--dark-blue);
  }

  /* NASA Section */
  .nasa-section {
    background: var(--light-blue)
      linear-gradient(180deg, #e0f2f7 0%, #d1e8ec 100%);
    color: var(--dark-blue);
    padding: 4rem 0;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
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

  /* How It Works Section */
  .how-it-works-section {
    background: var(--light-blue)
      linear-gradient(180deg, #e0f2f7 0%, #d1e8ec 100%);
    padding: 4rem 0;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
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
  .app-screens-section {
    background: var(--dark-blue)
      linear-gradient(180deg, #0a1931 0%, #10264a 100%);
    color: var(--white);
    padding: 4rem 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

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
  .team-section {
    background: var(--light-blue)
      linear-gradient(180deg, #e0f2f7 0%, #d1e8ec 100%);
    color: var(--dark-blue);
    padding: 4rem 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

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
  .footer-section {
    background: var(--dark-blue)
      linear-gradient(180deg, #0a1931 0%, #10264a 100%);
    padding: 4rem 0;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .footer-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .footer-background .stars {
    height: 100%;
    opacity: 0.6;
  }

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

  /* Responsive Design */
  @media (max-width: 768px) {
    .nav {
      gap: 1rem;
    }

    .nav-link {
      font-size: 0.9rem;
    }

    .hero-content {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .hero-text {
      background: var(--white);
      margin-left: 0;
      margin-top: 2rem;
      padding: 2rem;
    }

    .hero-visual {
      min-height: 40vh;
    }

    .hand-illustration {
      max-width: 300px;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-brand {
      font-size: 3rem;
    }

    .how-it-works-content {
      flex-direction: column;
      text-align: center;
    }

    .footer-content {
      flex-direction: column;
      text-align: center;
    }

    .screens-carousel {
      flex-direction: column;
      align-items: center;
    }

    .screen-item {
      flex: none;
      max-width: 250px;
    }

    .team-members {
      gap: 1rem;
    }

    .member-card {
      flex-direction: column;
      text-align: center;
    }
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
