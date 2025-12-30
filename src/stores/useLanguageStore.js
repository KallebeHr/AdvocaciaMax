import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // Estado atual
  const currentLangCode = ref('PT-BR')

  // Dicionário de Traduções (Centralizado aqui)
  const translations = {
    'PT-BR': {
      inicio: 'Início',
      sobre: 'Sobre',
      localizacao: 'Localização',
      trajetoria: 'Trajetória',
      especialidades: 'Especialidades',
      comentarios: 'Comentários',
      contato: 'Contato',
      nomeDr: 'Dr. Seu Nome',
      tituloHome1: 'JUSTIÇA',
      tituloHome2: 'EFICIENTE E',
      tituloHome3: 'TRANSPARENTE.',
      homeDescrição: 'Atuação estratégica em casos de alta complexidade. Segurança jurídica e resultados para o seu negócio',
      homebtt1:'Falar com Advogado',
      homebtt2:'Nossa História →',
    },
    'EN-US': {
      inicio: 'Home',
      sobre: 'About',
      localizacao: 'Location',
      trajetoria: 'Firm History',
      especialidades: 'Practice Areas',
      comentarios: 'Testimonials',
      contato: 'Contact',
      nomeDr: 'Dr. Your Name',
      tituloHome1: 'EFFICIENT',
      tituloHome2: '& TRANSPARENT',
      tituloHome3: 'JUSTICE.',
      homeDescrição: 'Strategic legal counsel for high-complexity cases. Legal security and results for your business.',
      homebtt1: 'Speak with a Lawyer',
      homebtt2: 'Our Journey →',
    }
  }

  const languages = [
    { code: 'PT-BR', name: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
    { code: 'EN-US', name: 'English', flag: 'https://flagcdn.com/w40/us.png' }
  ]

  // Getters
  const t = computed(() => translations[currentLangCode.value])
  
  const currentLangFlag = computed(() => 
    languages.find(l => l.code === currentLangCode.value).flag
  )

  // Ações
  function setLanguage(langCode) {
    currentLangCode.value = langCode
  }

  return { 
    currentLangCode, 
    languages, 
    t, 
    currentLangFlag, 
    setLanguage 
  }
})