```html
<script setup>
import nuanuImg from '../assets/nuanu.png'
import guestproImg from '../assets/guestpro pms ios.png'
import chatAppImg from '../assets/chat app.png'

const projects = [
  {
    title: 'Nuanu Booking Engine',
    category: 'Frontend Developer',
    image: nuanuImg,
    description: 'A seamless booking engine for Nuanu City.',
    link: 'https://stay.nuanu.com'
  },
  {
    title: 'GuestPro PMS iOS',
    category: 'Flutter Developer',
    image: guestproImg,
    description: 'Property Management System for iOS devices.',
    link: 'https://apps.apple.com/id/app/guestpro-pms/id6740853442'
  },
  {
    title: 'GuestChat',
    category: 'Frontend Developer',
    image: chatAppImg,
    description: 'Real-time communication tool for hotels and guests.',
    link: 'https://chat.guestpro.net'
  }
];

import jepunImg from '../assets/bali_jepun.png'
</script>

<template>
  <section id="projects" class="py-24 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
    <!-- Decorations -->
    <img :src="jepunImg" class="absolute top-1/2 right-0 w-56 h-56 opacity-5 translate-x-1/3 pointer-events-none" />
    <img :src="jepunImg" class="absolute bottom-10 left-10 w-24 h-24 opacity-5 -rotate-12 pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h3 class="text-bali-brick uppercase tracking-widest font-semibold mb-2">Featured Work</h3>
          <h2 class="text-4xl font-display font-bold text-poleng-white mb-4">Selected <span class="text-bali-gold">Projects</span></h2>
          <div class="w-20 h-1 bg-bali-gold mb-8 mt-4"></div>
        </div>
        
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative overflow-hidden rounded-sm bg-poleng-black border border-white/5"
        >
          <!-- Image -->
          <div class="h-64 w-full overflow-hidden relative">
             <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
             <a :href="project.link" target="_blank" rel="noopener noreferrer" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 cursor-pointer">
                <span class="text-bali-gold border border-bali-gold px-4 py-2 uppercase text-sm tracking-wider hover:bg-bali-gold hover:text-black transition-colors duration-300">View Project</span>
             </a>
          </div>
          
          <div class="p-6 bg-poleng-black relative z-10 border-t border-white/5">
            <p class="text-xs text-bali-brick uppercase tracking-widest mb-2">{{ project.category }}</p>
            <h3 class="text-2xl font-display font-bold text-poleng-white group-hover:text-bali-gold transition-colors duration-300">{{ project.title }}</h3>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center md:hidden">
        <button class="text-bali-gold border-b border-bali-gold pb-1 font-body">
          View All Projects &rarr;
        </button>
      </div>
    </div>
  </section>
</template>
