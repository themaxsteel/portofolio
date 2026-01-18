<script setup>
import jepunImg from '../assets/bali_jepun.png'

// User Assets
import gym1 from '../assets/gym_1.JPEG'
import gym2 from '../assets/gym_2.JPG'
import gym3 from '../assets/gym_3.JPEG'
import basket1 from '../assets/basketball_1.mp4'
import basket2 from '../assets/basketball_2.MP4'
import basket3 from '../assets/basketball_3.MP4'

const hobbies = [
  // Gym 1-3
  { title: 'Gym & Fitness', src: gym1, type: 'image', alt: 'Gym Session 1', span: '' },
  { title: 'Strength', src: gym2, type: 'image', alt: 'Gym Session 2', span: '' },
  { title: 'Discipline', src: gym3, type: 'image', alt: 'Gym Session 3', span: '' },
  // Basketball 4-6
  { title: 'On The Court', src: basket1, type: 'video', alt: 'Basketball 1', span: '' },
  { title: 'Game Highlights', src: basket2, type: 'video', alt: 'Basketball Video 1', span: '' },
  { title: 'Practice', src: basket3, type: 'video', alt: 'Basketball Video 2', span: '' },
];
</script>

<template>
  <section id="hobbies" class="py-24 bg-poleng-black relative overflow-hidden border-t border-white/5">
    <!-- Decorations -->
    <img :src="jepunImg" class="absolute top-10 left-10 w-24 h-24 opacity-10 rotate-12 pointer-events-none" />
    <img :src="jepunImg" class="absolute bottom-10 right-10 w-32 h-32 opacity-10 -rotate-12 pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h3 class="text-bali-brick uppercase tracking-widest font-semibold mb-2">Lifestyle</h3>
        <h2 class="text-4xl font-display font-bold text-poleng-white">Beyond <span class="text-bali-gold">Code</span></h2>
        <div class="w-16 h-1 bg-bali-gold mx-auto mt-6"></div>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          Balancing mental agility with physical strength. Simple habits that keep me grounded and focused.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div 
          v-for="(hobby, index) in hobbies" 
          :key="index"
          class="group relative aspect-square overflow-hidden rounded-sm bg-neutral-900 border border-white/5 hover:border-bali-gold/50 transition-colors duration-300"
        >
          <!-- Image Handler -->
          <img 
            v-if="hobby.type === 'image'"
            :src="hobby.src" 
            :alt="hobby.alt" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
          />
          
          <!-- Video Handler -->
          <video 
            v-else
            :src="hobby.src" 
            muted 
            loop 
            autoplay 
            playsinline
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          ></video>
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          <!-- Content -->
          <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="text-lg md:text-xl font-display font-bold text-poleng-white group-hover:text-bali-gold transition-colors">{{ hobby.title }}</h3>
          </div>
          
          <!-- Corner Accents -->
          <div class="absolute top-2 right-2 w-3 h-3 border-t border-r border-bali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-bali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>
