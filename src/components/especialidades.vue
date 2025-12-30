<template>
  <section class="areas-section" id="especialidades">
    <div class="video-container">
      <video autoplay muted loop playsinline class="video-bg d-desktop">
        <source src="/bgEspe1.mp4" type="video/mp4" />
      </video>
      <video autoplay muted loop playsinline class="video-bg d-mobile">
        <source src="/bgEspe2.mp4" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>
    </div>

    <div class="container content-wrapper">
      
      <div class="header-content">
        <h2 class="section-title">Minhas <span class="highlight">Especialidades</span></h2>
        <div class="subtitle-wrapper">
          <div class="divider-line"></div>
          <p class="section-subtitle">Soluções jurídicas estratégicas e personalizadas para o seu caso.</p>
        </div>
      </div>

      <div class="areas-grid">
        <div
          v-for="(area, index) in areas"
          :key="index"
          class="area-card-modern"
        >
          <div class="icon-wrapper">
            <i :class="area.icone"></i>
            <div class="icon-bg-shape"></div>
          </div>
          
          <div class="card-body">
            <h3 class="titulo-area">{{ area.titulo }}</h3>
            <p class="descricao">{{ area.descricao }}</p>
          </div>
          
          <div class="card-footer">
            <a href="https://wa.me/SEUNUMERO" target="_blank" class="link-acao">
              Consultar Especialista <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div class="accent-bar"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const areas = [
  {
    titulo: 'Direito Civil',
    descricao: 'Proteção de direitos individuais, contratos, família e sucessões com foco na solução de conflitos.',
    icone: 'fa-solid fa-scale-balanced', 
  },
  {
    titulo: 'Trabalhista',
    descricao: 'Defesa técnica em relações de trabalho, garantindo o cumprimento fiel da legislação vigente.',
    icone: 'fa-solid fa-briefcase',
  },
  {
    titulo: 'Direito Penal',
    descricao: 'Atuação consultiva e contenciosa em inquéritos e processos, com foco na ampla defesa.',
    icone: 'fa-solid fa-gavel',
  },
  {
    titulo: 'Empresarial',
    descricao: 'Blindagem jurídica para negócios, contratos societários e gestão de riscos operacionais.',
    icone: 'fa-solid fa-building-columns',
  },
  {
    titulo: 'Administrativo',
    descricao: 'Assessoria em concursos, licitações e processos contra entes públicos com rigor técnico.',
    icone: 'fa-solid fa-landmark',
  },
  {
    titulo: 'Tributário',
    descricao: 'Planejamento fiscal estratégico para redução de custos e defesa em execuções fiscais.',
    icone: 'fa-solid fa-hand-holding-dollar',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');

.areas-section {
  --accent: #30ADDA;
  --dark: #002b45;
  --bg-card: rgba(255, 255, 255, 0.9); /* Card com leve transparência */
  
  position: relative;
  padding: 8rem 2rem;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  background-color: #000; /* Cor de fundo caso o vídeo falhe */
}

/* --- Sistema de Vídeo --- */
.video-container {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0;
}

.video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  /* Gradiente escuro para os cards brancos brilharem mais */
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 43, 69, 0.4) 50%, 
    rgba(0, 0, 0, 0.8) 100%);
  z-index: 1;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

/* --- Cabeçalho --- */
.header-content {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #ffffff; /* Título em branco para contrastar com o vídeo */
  text-transform: uppercase;
  letter-spacing: -2px;
  margin-bottom: 1rem;
}

.highlight {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--accent);
}

.divider-line {
  width: 60px;
  height: 4px;
  background: var(--accent);
  border-radius: 2px;
  margin: 0 auto 15px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 550px;
  margin: 0 auto;
  font-weight: 400;
}

/* --- Grid Moderno --- */
.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.area-card-modern {
  background: var(--bg-card);
  backdrop-filter: blur(10px); /* Efeito de desfoque no fundo do card */
  padding: 40px;
  border-radius: 24px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.area-card-modern:hover {
  transform: translateY(-12px);
  background: rgba(255, 255, 255, 1); /* Fica sólido no hover */
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

/* --- Ícones --- */
.icon-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper i {
  font-size: 2.2rem;
  color: var(--dark);
  z-index: 2;
  transition: 0.3s;
}

.icon-bg-shape {
  position: absolute;
  width: 45px;
  height: 45px;
  background: var(--accent);
  opacity: 0.2;
  border-radius: 12px;
  transform: rotate(-15deg);
  transition: 0.4s;
}

.area-card-modern:hover .icon-bg-shape {
  transform: rotate(0deg) scale(1.4);
  opacity: 1;
}

.area-card-modern:hover i {
  color: white;
}

/* --- Conteúdo --- */
.titulo-area {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 15px;
}

.descricao {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 30px;
  flex-grow: 1;
}

/* --- Link --- */
.link-acao {
  text-decoration: none;
  color: var(--dark);
  font-weight: 800;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
  text-transform: uppercase;
}

.area-card-modern:hover .link-acao {
  color: var(--accent);
}

.area-card-modern:hover .link-acao i {
  transform: translateX(5px);
}

/* Barra de Destaque */
.accent-bar {
  position: absolute;
  bottom: 0; left: 0;
  width: 0%; height: 5px;
  background: var(--accent);
  transition: 0.5s ease;
}

.area-card-modern:hover .accent-bar {
  width: 100%;
}

/* Visibilidade dos vídeos */
.d-mobile { display: none; }
@media (max-width: 900px) {
  .areas-section { padding: 4rem 1.5rem; }
  .areas-grid { grid-template-columns: 1fr; }
  .d-desktop { display: none; }
  .d-mobile { display: block; }
}
</style>