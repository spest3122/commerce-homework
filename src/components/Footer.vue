<template lang="">
  <footer class="border-t py-20 px-10 flex flex-col max-lg:items-center">
    <ul class="flex justify-evenly mb-4 max-lg:flex-col max-lg:text-center">
      <li v-for="item in list" :key="`bottom-list-${item.id}`">
        {{ item.name }}
      </li>
    </ul>
    <p>@F 2024</p>
    <p>統編 : 33440099</p>
    <p>MON-FRI 09:00-12:00</p>
  </footer>
</template>
<script setup>
import { ref } from "vue";

const list = ref([
  { id: 1, name: "如何購買" },
  { id: 2, name: "重要公告" },
  { id: 3, name: "關於F" },
  { id: 4, name: "隱私權" },
  { id: 5, name: "雜誌" },
  { id: 6, name: "反詐騙" },
  { id: 7, name: "yahoo@yahoo.com.tw" },
]);
</script>
<style lang=""></style>
