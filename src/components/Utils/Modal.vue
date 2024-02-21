<template>
  <div
    v-if="visible"
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="close"
    ></div>
    <div
      class="bg-white p-20 rounded-3xl shadow-[0_2_5_rgba(0,0,0,0.5)] z-[60]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const close = () => {
  console.log(1);
  //   emit("visible");
};
</script>

<style scoped>
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Shadow effect */
}
</style>
