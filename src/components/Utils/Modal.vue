<template>
  <div
    v-if="modalConfig.visible"
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="close"
    ></div>
    <div
      class="bg-white p-10 min-w-[300px] rounded-3xl shadow-[0_2_5_rgba(0,0,0,0.5)] z-[60] flex flex-col justify-center items-center"
    >
      <div
        class="flex flex-col items-center justify-center"
        v-html="modalConfig.content"
      ></div>
      <button
        v-if="modalConfig.cancelTimeout"
        class="border hover:bg-amber-100 hover:border-amber-100 w-full p-4"
        @click="$emit('close')"
      >
        確定
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({
  modalConfig: Object,
});
const emit = defineEmits(["close"]);

const defaultTimeout = 2500;

onMounted(() => {
  if (!props.modalConfig.cancelTimeout) {
    setTimeout(() => {
      emit("close");
    }, defaultTimeout);
  }
});
</script>

<style scoped>
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Shadow effect */
}
</style>
