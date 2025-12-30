<template>
  <section class="sobre-section" id="sobre">
    <div class="container">
      <div class="content-wrapper">
        <div class="header-content reveal">
          <div class="badge">Institucional</div>
          <h2 class="titulo">Nossos <br><span class="highlight">Pilares</span></h2>
          <p class="intro">
            Fundamentamos nossa atuação na intersecção entre a <strong>excelência jurídica</strong> e a inovação estratégica, garantindo segurança para o seu patrimônio e negócio.
          </p>
          <div class="divider"></div>
        </div>

        <div class="cards-wrapper">
          <div 
            class="card-modern reveal" 
            v-for="(item, index) in cards" 
            :key="index"
            :style="{ transitionDelay: `${index * 150}ms` }"
          >
            <div class="card-inner">
              <div class="icon-box">
                <i :class="item.icon"></i>
              </div>
              <div class="card-body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
              <div class="card-number">0{{ index + 1 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const cards = [
  { icon: 'fa-solid fa-scale-balanced', title: 'Ética', desc: 'Integridade absoluta e transparência em cada etapa do processo.' },
  { icon: 'fa-solid fa-bolt-lightning', title: 'Agilidade', desc: 'Respostas dinâmicas para um mercado que não espera.' },
  { icon: 'fa-solid fa-chess-knight', title: 'Estratégia', desc: 'Análise técnica de alta complexidade para decisões seguras.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Segurança', desc: 'Proteção jurídica focada na mitigação real de riscos.' }
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');

.sobre-section {
  --primary: #3ff3f0;
  --dark: #0f172a;
  --text-muted: #28323f;
  --bg-white: #ffffff;
  
  padding: 100px 5%;
  background-color: #dfeeed;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
}

/* --- Lado Esquerdo --- */
.header-content {
  max-width: 450px;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgb(0, 0, 0);
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.titulo {
  font-family: 'Montserrat', sans-serif;
  /* Tamanho grande e responsivo */
  font-size: clamp(2.5rem, 7vw, 4rem); 
  font-weight: 900; /* Peso máximo para impacto */
  line-height: 0.95;
  color: #1a1a1a;
  text-transform: uppercase; /* Montserrat fica excelente em Caps */
  letter-spacing: -2px; /* Aproxima as letras para um visual mais "designer" */
  margin-bottom: 25px;
}

.highlight {
  color: var(--primary);
  font-style: italic;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.divider {
  width: 60px;
  height: 4px;
  background: var(--primary);
  margin-top: 30px;
}

/* --- Grade de Cards --- */
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.card-modern {
  background: var(--bg-white);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0,0,0,0.05);
  overflow: hidden;
}

.card-modern:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(48, 173, 218, 0.1);
}

.card-inner {
  position: relative;
  z-index: 2;
}

.icon-box {
  width: 50px;
  height: 50px;
  background: var(--dark);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 25px;
  font-size: 1.2rem;
  transition: 0.3s;
}

.card-modern:hover .icon-box {
  background: var(--primary);
  transform: scale(1.1) rotate(-5deg);
}

.card-body h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 12px;
}

.card-body p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.card-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.068);
  transition: 0.3s;
}

.card-modern:hover .card-number {
  color: rgba(48, 173, 218, 0.08);
}

/* --- Animações --- */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* --- Responsividade --- */
@media (max-width: 992px) {
  .content-wrapper { grid-template-columns: 1fr; gap: 40px; }
  .header-content { max-width: 100%; text-align: center; }
  .divider { margin: 30px auto 0; }
}

@media (max-width: 600px) {
  .cards-wrapper { grid-template-columns: 1fr; }
  .sobre-section { padding: 60px 20px; }
}
</style>