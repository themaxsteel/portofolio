<script setup>
import barongImg from '../assets/barong.jpg'


const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};


</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-poleng-black overflow-hidden pt-16">
    <!-- Background: Barong Image -->
    <div class="absolute inset-0 z-0">
      <img :src="barongImg" alt="Barong Background" class="w-full h-full object-cover opacity-40 grayscale-[20%] brightness-75 scale-105" />
    </div>
    
    <!-- Gradient Overlay for Readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-poleng-black/95 via-poleng-black/70 to-poleng-black"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-poleng-black/80 via-transparent to-poleng-black/80"></div>
    
    <!-- Subtle Golden Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-bali-gold/10 blur-[100px] rounded-full pointer-events-none mix-blend-soft-light"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h2 class="text-bali-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up" style="animation-delay: 0.2s">
        Om Swastyastu – Welcome
      </h2>
      <h1 class="text-5xl md:text-7xl font-display font-bold text-poleng-white mb-6 leading-tight animate-fade-in-up" style="animation-delay: 0.4s">
        Creative <span class="text-transparent bg-clip-text bg-gradient-to-r from-bali-gold to-bali-brick">Developer</span>
      </h1>
      <p class="text-gray-400 text-lg md:text-xl font-body font-light mb-10 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.6s">
        Blending modern technology with timeless aesthetics. Building robust web applications with a touch of art.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style="animation-delay: 0.8s">
        <button 
          @click="scrollToSection('about')"
          class="bg-bali-gold text-poleng-black px-8 py-3 font-semibold rounded-sm hover:bg-white transition-colors duration-300 border border-bali-gold hover:border-white uppercase tracking-widest shadow-lg shadow-bali-gold/20"
        >
          About Me
        </button>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 w-full h-16 bg-gradient-to-t from-poleng-black to-transparent z-20"></div>

    <!-- Poleng Decoration Strip -->
    <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-black via-white to-black opacity-30"></div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
