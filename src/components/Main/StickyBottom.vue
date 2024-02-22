<template>
  <div class="hidden max-lg:block fixed bottom-0 w-full z-10">
    <button class="text-white bg-black py-3 w-full" @click="$emit('submitAdd')">
      {{ "加入購物車" }}
    </button>
  </div>
</template>
<script setup>
defineEmits(["submitAdd"]);
</script>
<style></style>
