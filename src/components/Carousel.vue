<template>
  <div class="flex w-full bg-white flex-col items-center px-4 pb-20">
    <p class="text-left text-xs self-start">#360 days</p>
    <div class="w-full relative overflow-hidden">
      <ul
        class="flex transition duration-150 ease"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <li v-for="i in 10" :key="`carousel-${i}`" class="mr-2">
          <div
            class="w-[400px] h-[500px] bg-lime-100 flex items-center justify-center"
          >
            {{ i }}
          </div>
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <ChevronLeftIcon class="w-4 h-4" @click="prevSlide" />
      <a class="mx-4">More</a>
      <ChevronRightIcon class="w-4 h-4" @click="nextSlide" />
    </div>
  </div>
</template>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
const currentSlide = ref(0);
function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = 2;
  }
}
function nextSlide() {
  if (currentSlide.value < 2) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
}
</script>
<style lang=""></style>
