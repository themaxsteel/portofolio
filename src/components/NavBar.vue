<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import barongIcon from '../assets/bali_barong_icon.png'

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-300 ease-in-out border-b-0"
    :class="[
      isScrolled ? 'bg-poleng-black/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    ]"
  >
    
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      <!-- Logo / Name -->
      <div 
        class="text-2xl font-display font-bold space-x-2 cursor-pointer group flex items-center"
        @click="scrollToSection('hero')"
      >
        <img :src="barongIcon" alt="Barong" class="h-10 w-10 object-contain mr-2 drop-shadow-lg" />
        <div class="flex flex-col md:flex-row md:items-baseline">
           <span class="text-bali-gold group-hover:text-bali-brick transition-colors duration-300 mr-1">Made</span>
           <span class="text-white">Turbowisesa</span>
        </div>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-8">
        <button 
          v-for="item in ['About', 'Skills', 'Projects', 'Hobbies', 'Contact']" 
          :key="item"
          @click="scrollToSection(item.toLowerCase())"
          class="text-poleng-white hover:text-bali-gold transition-colors duration-300 font-medium uppercase tracking-wider text-sm font-body relative group"
        >
          {{ item }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-bali-gold transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

    </div>
  </nav>
</template>
