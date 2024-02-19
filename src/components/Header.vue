<template>
  <header
    class="fixed h-24 border-b-[#EDEDED] border-b w-full bg-white px-3 my-0 mx-auto"
  >
    <div
      class="relative w-full flex max-lg:flex-col max-lg:items-start items-center h-full"
    >
      <div class="flex items-center h-full">
        <h1 class="flex h-10">
          <img src="../assets/Flogo.jpg" class="h-full w-full" />
        </h1>
      </div>
      <nav class="text-sm max-lg:text-xs max-lg:font-bold max-lg:w-full">
        <ul class="flex max-lg:justify-between">
          <li
            v-for="(nav, index) in navList"
            :key="`nav-${nav.id}`"
            :class="[
              index === 0 ? 'max-lg:hidden' : '',
              'mx-5 text-center relative max-lg:py-2 max-lg:mx-0',
            ]"
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
                v-for="(nest, index) in nav.nested"
                :key="`nest-${nest.id}`"
                class="w-24 px-2 mt-2 relative max-lg:w-18"
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
      <menu class="flex max-lg:top-4 absolute right-0">
        <li class="mx-2">
          <button>
            <MagnifyingGlassIcon class="h-7 w-7" aria-hidden="true" />
          </button>
        </li>
        <li class="mx-2">
          <button>
            <UserIcon class="h-7 w-7" aria-hidden="true" />
          </button>
        </li>
        <li class="mx-2">
          <button>
            <ShoppingCartIcon class="h-7 w-7" aria-hidden="true" />
          </button>
        </li>
        <li class="mx-2 lg:hidden max-lg:block">
          <button>
            <Bars3Icon class="h-7 w-7" aria-hidden="true" />
          </button>
        </li>
      </menu>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
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
