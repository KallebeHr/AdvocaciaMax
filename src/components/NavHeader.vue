<template>
  <header :class="['nav-container', { 'is-sticky': isScrolled, 'mobile-menu-open': isMobileMenuOpen }]">
    <div class="nav-content">
      <div class="logo-section">
        <img src="/LogoPNG.png" alt="BMA" class="logo-img" />
      </div>

      <div class="menu-wrapper">
        <nav class="desktop-nav">
          <ul class="nav-links">
            <li class="nav-item"><a href="#inicio" class="nav-link-text">{{ langStore.t?.inicio }}</a></li>
            <li class="nav-item"><a href="#sobre" class="nav-link-text">{{ langStore.t?.sobre }}</a></li>
            <li class="nav-item"><a href="#local" class="nav-link-text">{{ langStore.t?.localizacao }}</a></li>
            <li class="nav-item"><a href="#equipe" class="nav-link-text">{{ langStore.t?.trajetoria }}</a></li>
            <li class="nav-item"><a href="#especialidades" class="nav-link-text">{{ langStore.t?.especialidades }}</a></li>
            <li class="nav-item"><a href="#Comentarios" class="nav-link-text">{{ langStore.t?.comentarios }}</a></li>
            <li class="nav-item"><a href="#contato" class="nav-link-text">{{ langStore.t?.contato }}</a></li>
          </ul>
        </nav>

        <div class="lang-wrapper">
          <div class="language-selector" @click.stop="showDropdown = !showDropdown">
            <div class="flag-icon">
              <img class="mini-flag" :src="langStore.currentLangFlag" :alt="langStore.currentLangCode" />
            </div>
            <span class="lang-text">{{ langStore.currentLangCode }}</span>
            <span class="arrow" :class="{ 'arrow-rotate': showDropdown }">▾</span>
          </div>

          <Transition name="slide-fade">
            <div v-if="showDropdown" class="lang-dropdown">
              <div 
                v-for="lang in langStore.languages" 
                :key="lang.code" 
                class="lang-option" 
                @click="selectLanguage(lang)"
              >
                <img :src="lang.flag" class="mini-flag" />
                <span>{{ lang.name }}</span>
              </div>
            </div>
          </Transition>
        </div>

        <button class="hamburger" @click="isMobileMenuOpen = !isMobileMenuOpen" :class="{ 'is-active': isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <Transition name="mobile-fade">
      <nav v-if="isMobileMenuOpen" class="mobile-nav">
        <ul class="mobile-links">
          <li><a href="#inicio" @click="isMobileMenuOpen = false">{{ langStore.t?.inicio }}</a></li>
          <li><a href="#sobre" @click="isMobileMenuOpen = false">{{ langStore.t?.sobre }}</a></li>
          <li><a href="#local" @click="isMobileMenuOpen = false">{{ langStore.t?.localizacao }}</a></li>
          <li><a href="#equipe" @click="isMobileMenuOpen = false">{{ langStore.t?.trajetoria }}</a></li>
          <li><a href="#especialidades" @click="isMobileMenuOpen = false">{{ langStore.t?.especialidades }}</a></li>
          <li><a href="#Comentarios" @click="isMobileMenuOpen = false">{{ langStore.t?.comentarios }}</a></li>
          <li><a href="#contato" @click="isMobileMenuOpen = false">{{ langStore.t?.contato }}</a></li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguageStore } from '@/stores/useLanguageStore';

const langStore = useLanguageStore();
const showDropdown = ref(false);
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const selectLanguage = (lang) => {
  langStore.setLanguage(lang.code);
  showDropdown.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// Fechar dropdown ao clicar fora
const closeDropdown = () => {
  showDropdown.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
.nav-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(48, 173, 218, 0.3);
  font-family: 'Montserrat', sans-serif;
  transition: all 0.4s ease;
}

.is-sticky {
  background-color: #002b45;
  height: 70px;
  border-bottom: 2px solid #30ADDA;
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  transition: height 0.4s ease;
}

.is-sticky .nav-content { height: 70px; }

.menu-wrapper { display: flex; align-items: center; gap: 20px; }

/* Desktop Nav */
.nav-links { display: flex; list-style: none; gap: 15px; }
.nav-link-text {
  text-decoration: none;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
}
.nav-link-text:hover { color: #30ADDA; }

/* Hamburguer Custom */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10001;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background-color: #30ADDA;
  transition: 0.4s;
  border-radius: 2px;
}

.hamburger.is-active span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
.hamburger.is-active span:nth-child(2) { opacity: 0; }
.hamburger.is-active span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }

/* Language Selector Fix */
.lang-wrapper { position: relative; z-index: 10002; }
.language-selector {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #30ADDA;
  background: rgba(48, 173, 218, 0.1);
}

.flag-icon, .mini-flag {
  width: 20px;
  height: 20px;
  border-radius: 30%;
  object-fit: cover;
  display: block;
}

.lang-text { font-size: 11px; color: #fff; font-weight: 800; }

.lang-dropdown {
  position: absolute;
  top: 120%;
  right: 0;
  background: white;
  border-radius: 10px;
  padding: 5px;
  min-width: 140px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: #002b45;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
}
.lang-option:hover { background: #f0faff; }

/* Mobile Nav Overlay */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #002b45;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.mobile-links {
  list-style: none;
  text-align: center;
  padding: 0;
}

.mobile-links li { margin: 25px 0; }
.mobile-links a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Transitions */
.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.3s; }
.slide-fade-enter-from, .slide-fade-leave-to { opacity: 0; transform: translateY(10px); }

.mobile-fade-enter-active, .mobile-fade-leave-active { transition: opacity 0.4s; }
.mobile-fade-enter-from, .mobile-fade-leave-to { opacity: 0; }

.logo-img { height: 45px; width: auto; }

/* Responsiveness */
@media (max-width: 1200px) {
  .desktop-nav { display: none; }
  .hamburger { display: flex; }
  .nav-content { padding: 0 20px; }
}
</style>