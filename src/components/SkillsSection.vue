<script setup>
const skills = [
  { name: 'Vue 3', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'Flutter', level: 'Expert' },
  { name: 'UI/UX Design', level: 'Intermediate' },
  { name: 'Git', level: 'Advanced' },
];

import jepunImg from '../assets/bali_jepun.png'
import tedungImg from '../assets/bali_tedung.png'
</script>

<template>
  <section id="skills" class="py-24 bg-poleng-black relative overflow-hidden">
    <!-- Decorations -->
    <img :src="jepunImg" class="absolute top-0 left-0 w-32 h-32 opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    <img :src="jepunImg" class="absolute bottom-0 right-0 w-40 h-40 opacity-10 translate-x-1/3 translate-y-1/3 pointer-events-none rotate-45" />

    <!-- Tedung Umbrellas -->
    <img :src="tedungImg" class="absolute bottom-0 left-0 md:left-10 h-64 md:h-96 opacity-20 pointer-events-none z-0" />
    <img :src="tedungImg" class="absolute bottom-0 right-0 md:right-10 h-64 md:h-96 opacity-20 pointer-events-none z-0 -scale-x-100" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h3 class="text-bali-brick uppercase tracking-widest font-semibold mb-2">My Arsenal</h3>
        <h2 class="text-4xl font-display font-bold text-poleng-white">Technical <span class="text-bali-gold">Skills</span></h2>
        <div class="w-16 h-1 bg-bali-gold mx-auto mt-6"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div 
          v-for="(skill, index) in skills" 
          :key="index"
          class="relative group p-6 border border-white/10 hover:border-bali-gold/50 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-sm text-center"
        >
          <!-- Decorative Corners on Hover -->
          <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-bali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-bali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-bali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-bali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <h3 class="text-xl font-display text-poleng-white group-hover:text-bali-gold transition-colors duration-300">{{ skill.name }}</h3>
          <p class="text-sm text-gray-500 mt-1 font-body">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
