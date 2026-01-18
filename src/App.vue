<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import HobbySection from './components/HobbySection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="bg-poleng-black min-h-screen text-poleng-white font-body selection:bg-bali-gold selection:text-poleng-black">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HobbySection />
      <ContactSection />
    </main>
  </div>
</template>
