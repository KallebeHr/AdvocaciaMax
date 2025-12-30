<template>
  <section class="depoimentos-section" id="Comentarios">
    <div class="container content-wrapper">
      
      <div class="header-modern">
        <h2 class="titulo-sessao">O que dizem nossos <span class="highlight">Clientes</span></h2>
        <div class="divider-line"></div>
        <p class="section-subtitle">A confiança de quem já contou com nossa expertise jurídica.</p>
      </div>

      <swiper
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :space-between="30"
        :breakpoints="{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="swiper-container"
      >
        <swiper-slide v-for="(item, i) in depoimentos" :key="i">
          <div class="card-modern">
            <span class="aspas material-icons">format_quote</span>
            
            <div class="stars">
              <i class="fa-solid fa-star" v-for="s in 5" :key="s"></i>
            </div>

            <p class="texto">“{{ item.texto }}”</p>
            
            <div class="autor">
              <div class="foto-wrapper">
                <img :src="item.foto" alt="Foto do cliente" class="foto" />
              </div>
              <div class="info">
                <p class="nome">{{ item.nome }}</p>
                <p class="local">{{ item.local }}</p>
              </div>
            </div>
            <div class="accent-bar"></div>
          </div>
        </swiper-slide>
      </swiper>

      <p class="indicador">
        <span class="material-icons">swipe</span> Arraste para explorar
      </p>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// Módulos necessários do Swiper para Vue 3
const modules = [Autoplay, Pagination]

const depoimentos = [
  {
    nome: 'João Silva',
    local: 'São Paulo, SP',
    texto: 'Fiquei muito satisfeito com o atendimento e a clareza de todo o processo. Recomendo sem dúvidas.',
    foto: 'https://randomuser.me/api/portraits/men/30.jpg'
  },
  {
    nome: 'Mariana Rocha',
    local: 'Belo Horizonte, MG',
    texto: 'A equipe foi muito atenciosa e solucionou meu caso rapidamente, com profissionalismo e respeito.',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    nome: 'Carlos Torres',
    local: 'Curitiba, PR',
    texto: 'Profissionais competentes e humanos. Fui muito bem orientado e me senti seguro durante todo o processo.',
    foto: 'https://randomuser.me/api/portraits/men/52.jpg'
  },
  {
    nome: 'Ricardo Almeida',
    local: 'Porto Alegre, RS',
    texto: 'Excelente suporte jurídico. A transparência em cada etapa do processo me trouxe muita tranquilidade.',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.depoimentos-section {
  --primary: #30ADDA;
  --dark: #002b45;
  --bg-section: #ffffff; /* Fundo Branco conforme solicitado */
  
  padding: 6rem 0;
  font-family: 'Montserrat', sans-serif;
  background-color: var(--bg-section);
}

.content-wrapper { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 1.5rem; 
}

/* --- Cabeçalho --- */
.header-modern { text-align: center; margin-bottom: 3rem; }

.titulo-sessao {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 900;
  color: var(--dark);
  text-transform: uppercase;
  letter-spacing: -2px;
}

.highlight { 
  color: transparent; 
  -webkit-text-stroke: 1.5px var(--primary); 
}

.divider-line {
  width: 70px; 
  height: 4px; 
  background: var(--primary);
  margin: 15px auto; 
  border-radius: 2px;
}

.section-subtitle {
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 400;
}

/* --- Swiper & Cards --- */
.swiper-container { padding: 2rem 1rem 4rem 1rem; }

.card-modern {
  background: #f8fafc; /* Cinza bem clarinho para destacar no fundo branco */
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 3rem 2rem 2rem;
  position: relative;
  height: 100%;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-modern:hover {
  transform: translateY(-10px);
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-color: var(--primary);
}

.aspas {
  position: absolute;
  top: 1.5rem; right: 2rem;
  font-size: 2.5rem;
  color: var(--primary);
  opacity: 0.15;
}

.stars { color: #ffc107; font-size: 0.8rem; margin-bottom: 1.5rem; display: flex; gap: 4px; }

.texto {
  font-size: 1rem;
  color: #334155;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 400;
}

/* --- Autor Info --- */
.autor { display: flex; align-items: center; gap: 1rem; }

.foto-wrapper {
  padding: 2px;
  border: 2px solid var(--primary);
  border-radius: 50%;
}

.foto { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }

.nome { font-weight: 800; color: var(--dark); font-size: 1.1rem; margin-bottom: 2px; }

.local { font-size: 0.8rem; color: #64748b; font-weight: 600; }

.accent-bar {
  position: absolute;
  bottom: 0; left: 0; width: 0%; height: 5px;
  background: var(--primary); transition: 0.4s;
}

.card-modern:hover .accent-bar { width: 100%; }

/* --- Indicador e Paginação --- */
.indicador {
  margin-top: 1rem; 
  color: #94a3b8;
  font-weight: 700; 
  text-transform: uppercase; 
  font-size: 0.75rem;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  gap: 0.5rem;
}

/* Customização dos pontinhos do Swiper */
:deep(.swiper-pagination-bullet) { background: var(--dark); opacity: 0.2; }
:deep(.swiper-pagination-bullet-active) { background: var(--primary); opacity: 1; transform: scale(1.2); }

@media (max-width: 768px) {
  .depoimentos-section { padding: 4rem 0; }
  .card-modern { padding: 2.5rem 1.5rem 1.5rem; }
}
</style>