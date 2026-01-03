<template>
  <section class="locais-section" id="local">
    <div class="bg-container">
      <img src="/mapPc.png" alt="Mapa Background Desktop" class="bg-image d-desktop">
      <img src="/mapPc.png" alt="Mapa Background Mobile" class="bg-image d-mobile">
      <div class="bg-overlay"></div>
    </div>

    <div class="container content-wrapper">
      <div class="header-modern">
        <h2 class="titulo-sessao">Onde nos <span class="highlight">Encontrar</span></h2>
        <div class="status-badge">
          <span class="dot-online"></span> Disponível para atendimento
        </div>
      </div>

      <div class="grid-layout">
        
        <div class="info-side">
          <div class="passo">
            <span class="step-num">01</span>
            <h3>Selecione a Unidade</h3>
          </div>

          <div class="selector-pills">
            <label v-for="(local, index) in locais" :key="index" class="pill">
              <input type="radio" name="local" :value="local" v-model="localSelecionado" />
              <div class="pill-content">
                <i class="fa-solid fa-building-shield"></i>
                <span>{{ local.nome }}</span>
              </div>
            </label>
          </div>
        </div>

        <div class="map-side">
          <div class="passo d-mobile-only">
            <span class="step-num">02</span>
            <h3>Localização</h3>
          </div>
          <div class="map-container-wrapper">
            <div id="map"></div>
          </div>
        </div>

        <div class="details-side">
          <div class="passo d-mobile-only">
            <span class="step-num">03</span>
            <h3>Informações e Rota</h3>
          </div>
          <div class="detalhes-card">
            <div class="card-header">
              <i class="fa-solid fa-location-dot"></i>
              <h4>{{ localSelecionado.cidade }}</h4>
            </div>
            
            <div class="lista-info">
              <div class="info-item">
                <span class="label">Endereço</span>
                <p>{{ localSelecionado.endereco }} - {{ localSelecionado.bairro }}</p>
              </div>
              <div class="info-item">
                <span class="label">CEP</span>
                <p>{{ localSelecionado.cep }}</p>
              </div>
              <div class="info-item">
                <span class="label">Atendimento</span>
                <p>{{ localSelecionado.evento }}</p>
              </div>
            </div>

            <a :href="googleMapsLink" target="_blank" class="btn-rota">
              Traçar Rota <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import L from 'leaflet' 
import 'leaflet/dist/leaflet.css'

const locais = [
  {
    cidade:'São Paulo - SP',
    nome: 'Sede Principal',
    coords: [-23.550520, -46.633308],
    endereco: 'Praça da Sé, 385.',
    bairro: 'Centro',
    cep: '01001-000',
    evento: 'Seg à Sex: 09h às 18h'
  },
  {
    cidade:'Rio de Janeiro - RJ',
    nome: 'Unidade RJ',
    coords: [-22.906847, -43.172896],
    endereco: 'Av. Erasmo Braga, 115.',
    bairro: 'Centro',
    cep: '20020-903',
    evento: 'Apenas com agendamento'
  }
];

const localSelecionado = ref(locais[0])
let map = null
let marker = null

// Computa o link real para o Google Maps Directions
const googleMapsLink = computed(() => {
  const [lat, lng] = localSelecionado.value.coords
  // URL universal para rotas
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
})

onMounted(() => {
  // Inicializa o mapa
  map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false
  }).setView(localSelecionado.value.coords, 16) 

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap'
  }).addTo(map)

  const customIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div class="pin-effect"></div><i class="fa-solid fa-circle" style="color:#30ADDA; font-size:12px"></i>`,
    iconSize: [20, 20]
  });

  marker = L.marker(localSelecionado.value.coords, { icon: customIcon }).addTo(map)
})

// Limpa a instância do mapa ao destruir o componente (evita memory leaks)
onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
})

watch(localSelecionado, (novo) => {
  if (map && marker) {
    map.flyTo(novo.coords, 16, { duration: 1.5 })
    marker.setLatLng(novo.coords)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');

.locais-section {
  --primary: #ffffff;
  --dark: #30ADDA;
  position: relative;
  padding: 6rem 0;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  min-height: 850px;
  background: #353535;
}

/* --- Background Image Handling --- */
.bg-container {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0;
}
.bg-image { 
  width: 100%; height: 100%; 
  object-fit: cover; 
  position: absolute;
  top: 0; left: 0;
}

/* Controle de exibição Desktop/Mobile das imagens */
.d-mobile { display: none; }
.d-desktop { display: block; }

.bg-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.7) 0%, 
    rgba(255, 255, 255, 0) 50%, 
    rgba(0, 0, 0, 0.7) 100%);
  z-index: 1;
}

.content-wrapper { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* --- Cabeçalho --- */
.header-modern { text-align: center; margin-bottom: 4rem; }
.titulo-sessao {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--dark);
  text-transform: uppercase;
  letter-spacing: -2px;
}
.highlight { color: transparent; -webkit-text-stroke: 1.5px var(--primary); }
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--dark);
  margin-top: 15px;
}
.dot-online { width: 10px; height: 10px; background: #10b981; border-radius: 50%; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2); }

/* --- Layout Grid Desktop --- */
.grid-layout {
  display: grid;
  grid-template-columns: 420px 1fr;
  grid-template-areas: 
    "info map"
    "details map";
  gap: 30px;
}

.info-side { grid-area: info; }
.details-side { grid-area: details; }
.map-side { grid-area: map; height: 100%; min-height: 550px; margin: 20px; }

/* --- Componentes Internos --- */
.passo { display: flex; align-items: center; gap: 10px; margin-bottom: 1.2rem; }
.step-num { font-weight: 900; color: var(--primary); opacity: 0.6; font-size: 1.5rem;}
.passo h3 { font-weight: 800; color: var(--primary); text-transform: uppercase; font-size: 1rem; }

.selector-pills { display: flex; gap: 10px; margin-bottom: 1rem; }
.pill { cursor: pointer; flex: 1; }
.pill input { display: none; }
.pill-content {
  background: white;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 800;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #64748b;
  transition: 0.3s;
}
.pill input:checked + .pill-content { background: var(--dark); color: white; transform: scale(1.02); }

.detalhes-card {
  background: rgba(0, 43, 69, 0.95);
  padding: 30px;
  border-radius: 24px;
  color: white;
  border: 1px solid rgba(255,255,255,0.1);
}
.card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.card-header i { color: var(--primary); font-size: 1.3rem; }
.card-header h4 { font-weight: 800; font-size: 1.1rem; }

.info-item { margin-bottom: 15px; }
.info-item .label { font-size: 0.65rem; color: var(--dark); font-weight: 900; text-transform: uppercase; letter-spacing: 1px; }
.info-item p { font-size: 0.95rem; opacity: 0.9; }

.btn-rota {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  background: var(--primary); color: #30ADDA; text-decoration: none;
  padding: 16px; border-radius: 12px; font-weight: 800; font-size: 0.85rem;
  text-transform: uppercase; transition: 0.3s; margin-top: 10px;
}
.btn-rota:hover { filter: brightness(0.9); transform: translateY(-2px); }

/* --- Mapa --- */
.map-container-wrapper {
  height: 100%; border-radius: 30px; overflow: hidden;
  border: 6px solid white; box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
#map { width: 100%; height: 100%; z-index: 1; }

/* Custom Marker CSS */
:deep(.custom-pin) { display: flex; align-items: center; justify-content: center; }
:deep(.pin-effect) {
  position: absolute; width: 40px; height: 40px; background: #30ADDA;
  border-radius: 50%; animation: pulse 2s infinite; opacity: 0.4;
}
@keyframes pulse { 0% { transform: scale(0.5); opacity: 0.5; } 100% { transform: scale(2.5); opacity: 0; } }

.d-mobile-only { display: none; }

/* --- RESPONSIVIDADE MOBILE (UX REORDENADA) --- */
@media (max-width: 900px) {
  .grid-layout {
    display: flex;
    flex-direction: column; /* Pilha vertical */
    gap: 40px;
  }

  .info-side { order: 1; }  /* PASSO 01 */
  .map-side { order: 2; height: 350px; min-height: 350px; margin: 0; } /* PASSO 02 */
  .details-side { order: 3; } /* PASSO 03 */

  .d-mobile-only { display: flex; }
  
  /* Troca de imagens no mobile */
  .d-desktop { display: none; }
  .d-mobile { display: block; }
  
  .locais-section { padding: 4rem 0; }
  .header-modern { margin-bottom: 2rem; }
}
</style>