<template lang="">
  <main class="pt-24 flex h-full">
    <section class="w-1/2">
      <img v-for="i in 3" :src="`/src/assets/picture${i}.png`" />
    </section>
    <section class="w-1/2 relative flex justify-center items-center">
      <div class="fixed flex flex-col">
        <div class="flex justify-end"><HeartIcon class="w-7 h-7" /></div>
        <div class="flex justify-between">
          <p>就是圖片一圖片一</p>
          <p>NT. 100000</p>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { HeartIcon } from "@heroicons/vue/24/outline";
</script>
<style lang=""></style>
