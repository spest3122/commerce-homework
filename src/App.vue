<template>
  <div class="max-w-[1920px] relative h-full">
    <Header
      @toggleSideBar="toggleSideBar"
      :sideBarStatus="sideBarStatus"
    ></Header>

    <Sidebar :class="{ hidden: sideBarStatus }"></Sidebar>
    <Main></Main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Sidebar from "./components/Sidebar.vue";
const sideBarStatus = ref(true);
function toggleSideBar() {
  sideBarStatus.value = !sideBarStatus.value;
}
</script>

<style scoped></style>
