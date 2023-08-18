/* 1.- import 
   2.- Create route variables
   3.- Providing routes
   4.- Export router */

import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
