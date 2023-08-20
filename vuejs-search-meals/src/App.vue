<template>
   <div class="bg-gray-100 h-full">
      <header class="bg-white shadow h-16 flex justify-between items-stretch">
         <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
            Hem
         </router-link>
         <div class="flex items-center gap-1">
            <router-link to="/" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-300">
               Sök måltid
            </router-link>
            <router-link to="/" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-300">
               Måltid efter bokstav
            </router-link>
            <router-link to="/" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-300">
               Måltid efter ingredienser
            </router-link>
         </div>
      </header>
      <main>
      	<router-view/>
      </main>
   </div>
</template>

<script setup>
</script>

<style scoped>

</style>
