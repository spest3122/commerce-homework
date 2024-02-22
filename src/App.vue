<template>
  <div class="max-w-[1920px] relative h-full">
    <Header
      @toggleSideBar="toggleSideBar"
      :sideBarStatus="sideBarStatus"
    ></Header>

    <Sidebar :class="{ hidden: sideBarStatus }"></Sidebar>
    <Main></Main>
    <Carousel />
    <Footer></Footer>

    <Modal
      v-if="modalConfig.visible"
      :modalConfig="modalConfig"
      @close="modalConfig.visible = !modalConfig.visible"
    ></Modal>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main/Index.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
import Modal from "./components/Utils/Modal.vue";

const sideBarStatus = ref(true);
const modalConfig = ref({
  visible: false,
  content: 1,
});

provide("modalSetup", {
  setUpModal,
});

function setUpModal({ visible, content }) {
  modalConfig.value["visible"] = visible;
  modalConfig.value["content"] = content;
}

function toggleSideBar() {
  sideBarStatus.value = !sideBarStatus.value;
}
</script>

<style scoped></style>
