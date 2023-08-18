/* 1.- import 
   2.- Create route variables
   3.- Providing routes
   4.- Export router */

import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
