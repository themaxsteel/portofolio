<script setup>
import profileImg from '../assets/turbo_pp.jpg'
import jepunImg from '../assets/bali_jepun.png'
</script>

<template>
  <section id="about" class="py-24 bg-poleng-black relative border-t border-white/5 overflow-hidden">
    <!-- Decorative Jepun Flowers -->
    <img :src="jepunImg" class="absolute -top-10 -right-10 w-48 h-48 opacity-20 rotate-12 pointer-events-none" />
    <img :src="jepunImg" class="absolute top-20 right-1/4 w-24 h-24 opacity-10 rotate-45 pointer-events-none blur-[2px]" />
    <img :src="jepunImg" class="absolute bottom-10 left-10 w-32 h-32 opacity-15 -rotate-12 pointer-events-none blur-[1px]" />
    <img :src="jepunImg" class="absolute bottom-1/3 -left-12 w-40 h-40 opacity-10 rotate-90 pointer-events-none" />
    <img :src="jepunImg" class="absolute top-10 left-1/3 w-16 h-16 opacity-10 rotate-180 pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
      
      <!-- Text Content -->
      <div class="order-2 md:order-1">
        <h3 class="text-bali-brick uppercase tracking-widest font-semibold mb-2">About Me</h3>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-poleng-white mb-6">
          Architecting <span class="italic text-bali-gold">Digital</span> Experiences
        </h2>
        <div class="w-20 h-1 bg-bali-gold mb-8"></div>
        <div class="space-y-4 text-gray-300 font-body leading-relaxed">
          <p>
            I am a passionate software engineer with a deep appreciation for structure and aesthetics. Just as traditional Balinese architecture balances harmony and function, I strive to build software that is both robust and beautiful.
          </p>
          <p>
            With expertise in Vue.js, clean code principles, and modern web standards, I transform complex requirements into intuitive, high-performance applications.
          </p>
        </div>
      </div>

      <!-- Visual/Image Placeholder -->
      <div class="order-1 md:order-2 relative">
        <!-- Frame Effect -->
        <div class="absolute -inset-4 border-2 border-bali-gold/30 rounded-sm transform translate-x-2 translate-y-2"></div>
        <div class="relative bg-neutral-800 aspect-[4/5] rounded-sm overflow-hidden flex items-center justify-center group shadow-2xl shadow-black/50">
           <!-- Real Profile Image -->
           <img :src="profileImg" alt="Turbowisesa" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
           
           <!-- Overlay -->
           <div class="absolute inset-0 bg-gradient-to-t from-poleng-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
           
           <!-- Decorative Corner -->
           <div class="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-bali-gold z-20"></div>
           <div class="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-bali-gold z-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>
