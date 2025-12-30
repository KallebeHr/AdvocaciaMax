<template>
  <section class="contatos-section" id="contato">
    <div class="container">
      
      <div class="header-contato">
        <h2 class="section-title">Fale <span class="highlight">Conosco</span></h2>
        <div class="divider-line"></div>
        <p class="section-subtitle">
          Tem alguma dúvida ou precisa de uma consulta jurídica? Envie-nos uma mensagem.
        </p>
      </div>

      <div class="contatos-wrapper">
        
        <div class="form-card">
          <h3 class="card-title">Envie uma Mensagem</h3>
          <form @submit.prevent="submitForm" class="contact-form">
            
            <div class="form-row">
              <div class="form-group">
                <label for="nome">Nome Completo</label>
                <input type="text" id="nome" v-model="formData.nome" required placeholder="O seu nome">
              </div>
              
              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model="formData.email" required placeholder="E-mail">
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" v-model="formData.telefone" placeholder="Telefone">
              </div>

              <div class="form-group">
                <label for="assunto">Assunto</label>
                <input type="text" id="assunto" v-model="formData.assunto" required placeholder="Assunto">
              </div>
            </div>
            
            <div class="form-group">
              <label for="mensagem">Mensagem</label>
              <textarea id="mensagem" v-model="formData.mensagem" rows="4" required placeholder="Sua situação legal..."></textarea>
            </div>
            
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              <i class="fa-solid fa-paper-plane"></i>
              {{ isSubmitting ? 'A ENVIAR...' : 'ENVIAR MENSAGEM' }}
            </button>
          </form>
        </div>
        
        <div class="info-card">
          <h3 class="card-title">Canais Diretos</h3>
          <div class="info-list">
            <div class="info-item">
              <div class="icon-circle"><i class="fa-solid fa-phone"></i></div>
              <div>
                <h4>Telefone</h4>
                <p>(11) 1234-5678</p>
                <a href="tel:+5511987654321" class="link-action">Ligar Agora</a>
              </div>
            </div>
            <div class="info-item">
              <div class="icon-circle"><i class="fa-solid fa-envelope"></i></div>
              <div>
                <h4>E-mail</h4>
                <p>contato@exemplo.com</p>
              </div>
            </div>
            <div class="info-item">
              <div class="icon-circle"><i class="fa-solid fa-clock"></i></div>
              <div>
                <h4>Atendimento</h4>
                <p>Seg à Sex: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup>

import { reactive, ref } from 'vue';



const formData = reactive({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });

const isSubmitting = ref(false);

const submitStatus = ref(null);



const submitForm = async () => {

  isSubmitting.value = true;

  await new Promise(resolve => setTimeout(resolve, 1500));

  submitStatus.value = 'success';

  Object.keys(formData).forEach(key => formData[key] = '');

  isSubmitting.value = false;

  setTimeout(() => submitStatus.value = null, 5000);

};

</script>
<style scoped>
/* Reset local para evitar quebra de layout */
* { box-sizing: border-box; }

.contatos-section {
  --primary: #30ADDA;
  --dark: #002b45;
  padding: 5rem 0;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden; /* Garante que nada saia da seção */
}

.container { 
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px; /* Padding lateral de segurança */
}

.header-contato { text-align: center; margin-bottom: 3rem; }
.section-title {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 900;
  color: var(--dark);
  text-transform: uppercase;
}
.highlight { color: transparent; -webkit-text-stroke: 1.2px var(--primary); }
.divider-line { width: 60px; height: 4px; background: var(--primary); margin: 15px auto; }
.section-subtitle { color: #64748b; font-size: 1rem; max-width: 600px; margin: 0 auto; }

/* --- Layout Grid --- */
.contatos-wrapper { 
  display: grid; 
  grid-template-columns: 1.4fr 1fr; 
  gap: 30px; 
  width: 100%;
}

/* --- Cards --- */
.form-card, .info-card {
  width: 100%; /* Garante que o card respeite a coluna do grid */
  border-radius: 20px;
  padding: 30px;
}

.form-card { background: #f8fafc; border: 1px solid #e2e8f0; }
.info-card { background: var(--dark); color: white; }

.card-title { font-weight: 800; color: inherit; margin-bottom: 1.5rem; font-size: 1.3rem; text-transform: uppercase; }
.form-card .card-title { color: var(--dark); }
.info-card .card-title { color: var(--primary); }

/* --- Formulário --- */
.contact-form { display: flex; flex-direction: column; gap: 15px; }
.form-row { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 15px; 
}

.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-group label { font-weight: 700; color: var(--dark); font-size: 0.8rem; text-transform: uppercase; }

.form-group input, .form-group textarea {
  width: 100%; /* Input nunca foge do container */
  padding: 12px; 
  border: 1.5px solid #e2e8f0; 
  border-radius: 10px;
  font-family: inherit;
}

.submit-button {
  background: var(--dark); color: white; border: none; padding: 16px;
  border-radius: 10px; font-weight: 900; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 10px;
}

/* --- Info List --- */
.info-list { display: flex; flex-direction: column; gap: 20px; }
.info-item { display: flex; gap: 15px; align-items: flex-start; }
.icon-circle {
  width: 40px; height: 40px; background: rgba(48, 173, 218, 0.2);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
  color: var(--primary); flex-shrink: 0;
}
.info-item h4 { font-weight: 800; margin-bottom: 2px; font-size: 0.95rem; color: var(--primary); }
.info-item p { font-size: 0.9rem; opacity: 0.9; }
.link-action { color: white; font-weight: 700; font-size: 0.75rem; text-decoration: underline; }

/* =========================================
   📱 MOBILE FIX (RESOLVE O "ULTRAPASSAR")
   ========================================= */
@media (max-width: 900px) {
  .contatos-section { padding: 3rem 0; }
  
  .contatos-wrapper { 
    grid-template-columns: 1fr; /* Força uma coluna única */
    gap: 20px; 
  }
  
  .form-row { 
    grid-template-columns: 1fr; /* Inputs um embaixo do outro no mobile */
  }

  .form-card, .info-card {
    padding: 20px; /* Reduz padding interno no mobile */
  }

  .info-card { 
    order: -1; /* Informações aparecem antes do formulário no mobile */
  }

  .section-title { font-size: 2rem; }
}

/* Correção para telas muito pequenas (iPhone SE, etc) */
@media (max-width: 375px) {
  .container { padding: 0 15px; }
  .card-title { font-size: 1.1rem; }
}
</style>