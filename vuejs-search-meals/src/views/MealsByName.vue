<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Sök måltider efter namn</h1>
  </div>
  
  <div class="px-8 pb-3">
    <input type="text" v-model="keyword" class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 w-full"
      placeholder="Sök efter måltider" @change="searchMeals" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal"  :meal="meal"/>
  </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>
