// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/HomeComponent.vue';
import About from './components/pages/AboutComponent.vue';
import LiveStream from './components/pages/LivestreamComponent.vue';
import Music from './components/pages/MusicComponent.vue';
import Settings from './components/pages/SettingsComponent.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/livestream', name: 'LiveStream', component: LiveStream },
  { path: '/music', name: 'Music', component: Music },
  { path: '/settings', name: 'Settings', component: Settings }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;