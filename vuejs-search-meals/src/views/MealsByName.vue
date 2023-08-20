<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Sök måltider efter namn</h1>
  </div>
  <div class="px-8 pb-3">
    <input type="text" v-model="keyword" class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 w-full"
      placeholder="Sök efter måltider" @change="searchMeals" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" >
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Accusamus id voluptatem dolore facilis itaque est quibusdam
      </p>
      <div class="flex items-center justify-between">
        <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 text-white bg-red-500 hover:bg-red-600 transition-colors">Youtube</a>
      </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { computed, ref } from 'vue';
import store from '../store';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}
</script>
