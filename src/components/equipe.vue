<template>
  <section class="sobre-mim-section" id="equipe">
    <div class="container">
      
      <div class="header-content">
        <h2 class="titulo">Minha <span class="highlight">Trajetória</span></h2>
        <div class="subtitle-container">
          <div class="line blue"></div>
          <span class="eyebrow">História e Conquistas</span>
        </div>
      </div>
      
      <Swiper
        :modules="[Pagination, EffectCoverflow]"
        effect="coverflow"
        :coverflowEffect="coverflowConfig"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :pagination="{ clickable: true }"
        class="swiper-custom"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(marco, index) in timeline"
          :key="index"
          class="slide-card"
          :class="{ ativo: index === activeIndex }"
        >
          <div class="card-timeline">
            <div class="year-badge">{{ marco.ano }}</div>
            
            <div class="image-container">
              <img :src="marco.foto" :alt="marco.evento" />
            </div>

            <div class="content-box">
              <h3 class="evento-titulo">{{ marco.evento }}</h3>
              <p class="descricao-fato">{{ marco.descricao }}</p>
              
              <div class="footer-card">
                <div class="dot-indicator"></div>
                <span class="location">{{ marco.local }}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const activeIndex = ref(0);

// Dados estruturados como Linha do Tempo
const timeline = [
  {
    ano: '2019',
    evento: 'Graduação',
    descricao: 'Em 2019 me formei em Direito, consolidando o início de um sonho e de uma carreira dedicada à justiça.',
    foto: '/adv.png',
    local: 'Universidade ABC'
  },
  {
    ano: '2020',
    evento: 'Aprovação OAB',
    descricao: 'Conquistei a aprovação na OAB logo no primeiro exame, iniciando oficialmente minha jornada como advogado.',
    foto: '/adv.png',
    local: 'OAB Seccional'
  },
  {
    ano: '2021',
    evento: 'Consultoria',
    descricao: 'Abri minha própria consultoria jurídica, focada em entregar soluções ágeis e personalizadas.',
    foto: '/adv.png',
    local: 'Escritório Próprio'
  },
  {
    ano: '2022',
    evento: 'Expansão Digital',
    descricao: 'Digitalizei 100% dos meus processos, permitindo um atendimento rápido e eficiente para clientes em todo o país.',
    foto: '/adv.png',
    local: 'Plataforma Online'
  },
  {
    ano: '2023',
    evento: 'Especialização',
    descricao: 'Concluí minha pós-graduação em Direito Previdenciário para melhor atender casos de alta complexidade.',
    foto: '/adv.png',
    local: 'Instituto Master'
  },
  {
    ano: '2024',
    evento: 'Reconhecimento',
    descricao: 'Alcancei a marca de centenas de clientes satisfeitos, tornando-me referência em soluções jurídicas humanizadas.',
    foto: '/adv.png',
    local: 'Atualidade'
  }
];

const coverflowConfig = {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2,
  slideShadows: false,
};

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');

.sobre-mim-section {
  --primary: #30ADDA;
  --dark: #002b45;
  background-color: #f8fafc;
  padding: 4rem 0;
  font-family: 'Montserrat', sans-serif;
}

.container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }

/* --- Cabeçalho --- */
.header-content { text-align: center; margin-bottom: 2rem; }

.titulo {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: var(--dark);
  text-transform: uppercase;
  letter-spacing: -1.5px;
}

.highlight {
  color: transparent;
  -webkit-text-stroke: 1.2px var(--primary);
}

.subtitle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.line { width: 40px; height: 3px; border-radius: 2px; background: var(--primary); }
.eyebrow { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #666; letter-spacing: 2px; }

/* --- Swiper e Card Timeline --- */
.swiper-custom { padding: 3rem 0 4rem; }

.slide-card {
  width: 300px !important;
  transition: all 0.4s ease;
  opacity: 0.4;
  transform: scale(0.85);
}

.slide-card.ativo {
  opacity: 1;
  transform: scale(1);
}

.card-timeline {
  background: white;
  border-radius: 20px;
  overflow: visible;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  position: relative;
  border-bottom: 5px solid var(--primary);
}

.year-badge {
  position: absolute;
  top: -20px;
  left: 20px;
  background: var(--dark);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1rem;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.image-container {
  width: 100%;
  height: 320px; /* Altura reduzida para equilíbrio */
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-box { padding: 1.5rem; text-align: left; }

.evento-titulo {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.descricao-fato {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  min-height: 65px;
}

.footer-card {
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.dot-indicator {
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
}

.location {
  font-size: 0.75rem;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
}

/* Paginação */
:deep(.swiper-pagination-bullet-active) { background: var(--primary); width: 25px; border-radius: 5px; }

@media (max-width: 600px) {
  .slide-card { width: 270px !important; }
}
</style>