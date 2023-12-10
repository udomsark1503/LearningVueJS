import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../views/HelloWorld.vue';
import HomePage from '../views/HomePage.vue';
const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage',
  },
  {
    path: '/Demo1',
    component: HelloWorld,
    name: 'HelloWorld',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;