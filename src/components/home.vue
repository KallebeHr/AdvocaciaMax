<template>
  <main class="hero-wrapper" id="inicio">
    <div class="video-bg">
      <img src="/jpeg.jpeg" class="video-obj">
       
      </img>
      <div class="video-overlay"></div>
    </div>

    <div class="content-container">
      <section class="text-block">
        <div class="badge">
          <span class="line"></span>
          <span class="badge-text">{{langStore.t.nomeDr}}</span>
        </div>
        
        <h1 class="main-title">
          {{langStore.t.tituloHome1}} <br />
          <span class="outline">{{langStore.t.tituloHome2}}</span> <br class="m-break" />
          <span class="accent">{{langStore.t.tituloHome3}}</span>
        </h1>
        
        <p class="description">
          {{langStore.t.homeDescrição}}
        </p>
        
        <div class="cta-row">
          <button class="btn-primary">{{langStore.t.homebtt1}}</button>
          <button class="btn-secondary">{{langStore.t.homebtt2}} →</button>
        </div>
      </section>

      <section class="image-block">
        <img src="/advpng1.png" alt="Advogado" class="advogado-image" />
      </section>
    </div>

    <div class="bottom-accent"></div>
  </main>
</template>
<script setup>
  import { useLanguageStore } from '@/stores/useLanguageStore';
  
  const langStore = useLanguageStore();
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');

.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

/* --- Video e Overlay --- */
.video-bg { position: absolute; inset: 0; z-index: 1; }
.video-obj { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.35); }

.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, 
    rgba(0,0,0,0.95) 0%, 
    rgba(0,0,0,0.6) 50%, 
    rgba(0,0,0,0.2) 100%);
  z-index: 2;
}

/* --- Container --- */
.content-container {
  position: relative;
  z-index: 10;
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
}

/* --- Texto --- */
.text-block {
  flex: 1;
  color: #fff;
  z-index: 15; /* Garante que o texto fique na frente da imagem no mobile */
}

.line { width: 30px; height: 2px; background: #30ADDA; }
.badge { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.badge-text { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #30ADDA; }

.main-title {
  font-size: clamp(32px, 5vw, 65px);
  font-weight: 900;
  line-height: 1.05;
  text-transform: uppercase;
  margin-bottom: 25px;
}

.outline { color: transparent; -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6); }
.accent { color: #30ADDA; }
.m-break { display: none; }

.description {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  max-width: 480px;
  margin-bottom: 40px;
}

.cta-row { display: flex; gap: 15px; }

/* Botões */
.btn-primary {
  background: #30ADDA; color: #fff; border: none; padding: 18px 35px;
  font-weight: 800; font-size: 12px; text-transform: uppercase;
  letter-spacing: 1px; cursor: pointer; transition: 0.3s;
  margin-bottom: 1rem;

}
.btn-secondary {
  background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.3);
  padding: 18px 35px; font-weight: 800; font-size: 12px;
  margin-bottom: 1rem;
  text-transform: uppercase; cursor: pointer; backdrop-filter: blur(5px);
}

/* --- Imagem (Desktop) --- */
.image-block {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 5;
}

.advogado-image {
  height: 90vh;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(-20px 0 50px rgba(0,0,0,0.5));
}

.bottom-accent { position: absolute; bottom: 0; left: 0; width: 100%; height: 5px; background: #30ADDA; z-index: 20; }

/* =========================================
   📱 AJUSTES MOBILE (O SEGREDO ESTÁ AQUI)
   ========================================= */
@media (max-width: 1024px) {
  .video-overlay {
    /* Overlay mais escuro no mobile para o texto não sumir sobre a foto */
    background: linear-gradient(180deg, 
      rgba(0,0,0,0.85) 0%, 
      rgba(0,0,0,0.4) 50%, 
      rgba(0,0,0,0.9) 100%);
  }

  .content-container {
    flex-direction: column;
    justify-content: flex-start; /* Texto começa no topo */
    padding: 0 25px;
    text-align: center;
    margin-top: 8rem;
  }

  .text-block {
    padding-top: 120px; /* Espaço para o menu */
    width: 100%;
  }

  .m-break { display: block; } /* Quebra o título melhor no mobile */
  
  .badge { justify-content: center; }
  .cta-row { justify-content: center; flex-direction: column; gap: 10px; }
  .btn-primary, .btn-secondary { width: 100%; }

  .description { margin: 0 auto 30px; }

  /* Transformando a imagem em um "fundo flutuante" no mobile */
  .image-block {
    position: absolute;
    bottom: 0;
    right: -10%; /* Move o advogado levemente para o lado */
    width: 100%;
    height: 70vh; /* Ocupa boa parte da tela */
    justify-content: center;
    opacity: 0.6; /* Leve transparência para não brigar com o texto */
    z-index: 3; /* Atrás do texto (15) mas na frente do vídeo (1) */
  }

  .advogado-image {
    height: 100%;
    filter: brightness(0.7) contrast(1.1);
  }
}

@media (max-width: 480px) {
  .text-block { padding-top: 80px; }
  .main-title { font-size: 34px; }
  .image-block { right: -20%; height: 60vh; } /* Ajuste fino para telas pequenas */
}
</style>