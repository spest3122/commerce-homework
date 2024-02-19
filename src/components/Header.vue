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
                v-for="nest in nav.nested"
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
            <div
              class="flex flex-wrap justify-between absolute pt-12 bg-white h-full w-[600px] text-left"
              v-show="index === 0 && nav.hover"
            >
              <ul class="flex flex-wrap">
                <li
                  v-for="shopTitle in shopAllList"
                  :key="`shopall-${shopTitle.id}`"
                  class="p-4"
                >
                  <span
                    class="font-bold cursor-pointer hover:border-b hover:border-b-black"
                  >
                    {{ shopTitle.theme }}</span
                  >
                  <ul class="flex flex-col mt-2">
                    <li
                      v-for="subList in shopTitle.lists"
                      :key="`${shopTitle.id}-${subList.id}`"
                    >
                      <span
                        class="hover:border-b hover:border-b-black cursor-pointer"
                      >
                        {{ subList.name }}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
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
const shopAllList = ref([
  {
    id: 1,
    theme: "品牌主打",
    lists: [
      { id: 1, name: "本週新品" },
      { id: 2, name: "2024人氣必買清單" },
      { id: 3, name: "鋪棉單品專區" },
      { id: 4, name: "迎新年。時髦紅色單品" },
      { id: 5, name: "熱銷BRA T系列" },
      { id: 6, name: "印花標語TEE系列" },
      { id: 7, name: "抗UV涼感紗系列" },
      { id: 8, name: "熱銷補貨" },
      { id: 9, name: "人氣預購" },
    ],
  },
  {
    id: 2,
    theme: "優惠活動",
    lists: [
      { id: 10, name: "新品折扣" },
      { id: 11, name: "2件$598" },
      { id: 12, name: "2件$798" },
      { id: 13, name: "單件$390起" },
    ],
  },
  {
    id: 3,
    theme: "風格支線",
    lists: [
      { id: 14, name: "PPP品牌限定系列" },
      { id: 15, name: "&IN THING個性系列" },
      { id: 16, name: "Aa小羊工作室系列" },
    ],
  },
  {
    id: 4,
    theme: "配件",
    lists: [
      { id: 17, name: "耳環" },
      { id: 18, name: "項鋉" },
      { id: 19, name: "戒指" },
      { id: 20, name: "髮飾" },
      { id: 21, name: "襪子" },
      { id: 22, name: "鞋類/鞋墊包包/提袋" },
      { id: 23, name: "生活小物" },
      { id: 24, name: "帽子/眼鏡" },
      { id: 25, name: "圍巾/領片/皮帶" },
    ],
  },
  {
    id: 5,
    theme: "特別企劃",
    lists: [
      { id: 26, name: "YONI佑妮 聯名企劃" },
      { id: 27, name: "PEANUTS史努比聯名企劃" },
      { id: 28, name: "金針菇 聯名企劃" },
      { id: 29, name: "REEBOK 跨界聯乘" },
      { id: 30, name: "URBAN RESEARCH 聯名企劃" },
      { id: 31, name: "ZIZONE 聯名企劃" },
      { id: 32, name: "TAMMY渡假生活企劃" },
      { id: 33, name: "New Balance 跨界聯乘" },
    ],
  },
  {
    id: 6,
    theme: "家居內著",
    lists: [
      { id: 34, name: "內衣內褲" },
      { id: 35, name: "家居服" },
    ],
  },
  {
    id: 7,
    theme: "美圖系列",
    lists: [
      { id: 36, name: "美圇褲全系列" },
      { id: 37, name: "顯瘦" },
    ],
  },
]);
</script>
<style></style>
