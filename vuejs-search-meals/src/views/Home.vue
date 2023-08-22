<template>
  <div class="flex flex-col p-8 items-center justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Sök efter måltid"
    />
    
     <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'


const ingredients = ref([])

onMounted(async () => {
   const response = await axiosClient.get('/list.php?i=list')
   console.log(response.data)
   ingredients.value = response.data
})
</script>
