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
      :modalConfig="modalConfig"
      @close="modalConfig.visible = !modalConfig.visible"
    ></Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main/Index.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
import Modal from "./components/Utils/Modal.vue";

const sideBarStatus = ref(true);
const modalConfig = ref({
  visible: true,
  content: `
  <div class="w-20 h-20 bg-lime-100 mb-4"></div>
      <p>已加入購物車</p>
    `,
  cancelTimeout: false,
});
/**
 * status1 <div class="w-20 h-20 bg-lime-100 mb-4"></div>
      <p>已加入購物車</p>
      cancelTimeout: false
 * status2 <div class="w-20 h-20 bg-lime-100 mb-4"></div>
      <p>請選擇尺寸</p>
      cancelTimeout: true

 */
function toggleSideBar() {
  sideBarStatus.value = !sideBarStatus.value;
}
</script>

<style scoped></style>
