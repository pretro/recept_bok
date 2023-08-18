<template>
  <div class="flex flex-col p-8 items-center justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Sök efter måltid"
    />
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{name: 'byLetter', params: {letter}}"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from '../axios.client.js'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(() => {
    axiosClient.get('/list.php?i=list')
}
</script>
