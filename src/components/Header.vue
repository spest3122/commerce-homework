<template>
  <header
    class="flex items-center fixed h-24 border-b-[#EDEDED] border-b w-full bg-white px-3 my-0 mx-auto"
  >
    <div class="flex items-center h-full">
      <h1 class="flex h-10">
        <img src="../assets/Flogo.jpg" class="h-full w-full" />
      </h1>
    </div>
    <nav class="flex-auto text-sm">
      <ul class="flex">
        <li
          v-for="nav in navList"
          :key="`nav-${nav.id}`"
          class="mx-5 text-center w-24 relative"
          @mouseover="nav.hover = true"
          @mouseleave="nav.hover = false"
        >
          <a href="#" class="cursor-pointer">{{
            nav.hover ? nav.subName : nav.name
          }}</a>

          <span
            v-show="nav.hover"
            class="absolute left-0 bottom-0 w-full h-[1px] bg-black"
          ></span>

          <ul
            v-show="nav.nested && nav.hover"
            class="bg-white absolute top-5 py-3 text-left"
          >
            <li
              v-for="nest in nav.nested"
              :key="`nest-${nest.id}`"
              class="w-24 px-2 mt-2 relative"
              @mouseover="nest.hover = true"
              @mouseleave="nest.hover = false"
            >
              <a
                href="#"
                :class="[
                  nest.hover ? 'border-b border-b-black' : '',
                  'cursor-pointer',
                ]"
                >{{ nest.name }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <menu class="flex">
      <li class="mx-2">
        <button>
          <MagnifyingGlassIcon class="h-8 w-8" aria-hidden="true" />
        </button>
      </li>
      <li class="mx-2">
        <button>
          <UserIcon class="h-8 w-8" aria-hidden="true" />
        </button>
      </li>
      <li class="mx-2">
        <button>
          <ShoppingCartIcon class="h-8 w-8" aria-hidden="true" />
        </button>
      </li>
    </menu>
  </header>
</template>
<script setup>
import { ref } from "vue";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
const navList = ref([
  {
    id: 1,
    name: "所有商品",
    subName: "SHOP ALL",
    hover: false,
  },
  { id: 2, name: "最新商品", subName: "NEW ARRIVAL", hover: false },
  { id: 3, name: "熱賣商品", subName: "RESTOCK", hover: false },
  { id: 4, name: "迷惑系列", subName: "HEAT", hover: false },
  {
    id: 5,
    name: "極度迷惑",
    subName: "#BKPANTS",
    hover: false,
    nested: [
      { id: 1, name: "美圖褲系列", hover: false },
      { id: 2, name: "短褲", hover: false },
      { id: 2, name: "長筒", hover: false },
      { id: 2, name: "西裝褲", hover: false },
    ],
  },
]);
</script>
<style></style>
