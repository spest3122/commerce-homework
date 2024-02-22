<template>
  <header
    class="fixed border-b-[#EDEDED] border-b w-full bg-white my-0 mx-auto z-10"
  >
    <div
      class="relative w-full flex max-lg:flex-col max-lg:items-start items-center h-24"
    >
      <div class="flex items-center h-full pl-3">
        <h1 class="flex h-10">
          <img src="../assets/Flogo.jpg" class="h-full w-full" />
        </h1>
      </div>
      <nav
        class="text-sm max-lg:text-xs max-lg:font-bold max-lg:w-full max-lg:px-3"
      >
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
              class="bg-white absolute top-5 py-3 text-left max-lg:hidden"
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
              <ul class="flex flex-wrap bg-white">
                <li
                  v-for="shop in shopAllList"
                  :key="`shopall-${shop.id}`"
                  class="p-4"
                >
                  <span
                    class="font-bold cursor-pointer hover:border-b hover:border-b-black"
                  >
                    {{ shop.theme }}</span
                  >
                  <ul class="flex flex-col mt-2">
                    <li
                      v-for="subShop in shop.lists"
                      :key="`${shop.id}-${subShop.id}`"
                    >
                      <span
                        class="hover:border-b hover:border-b-black cursor-pointer"
                      >
                        {{ subShop.name }}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <menu class="flex max-lg:top-4 absolute right-3">
        <li class="mx-2" v-show="searchBarStatus">
          <button @click="toggleSearchBar">
            <XMarkIcon class="h-7 w-7" aria-hidden="true" />
          </button>
        </li>
        <template v-if="!searchBarStatus">
          <li class="mx-2">
            <button @click="toggleSearchBar">
              <MagnifyingGlassIcon class="h-7 w-7" aria-hidden="true" />
            </button>
          </li>
          <li class="mx-2">
            <button>
              <UserIcon class="h-7 w-7" aria-hidden="true" />
            </button>
          </li>
          <li
            class="mx-2 relative"
            @mouseover="cartHover = true"
            @mouseleave="cartHover = false"
          >
            <div class="relative">
              <ShoppingCartIcon class="h-7 w-7" aria-hidden="true" />
              <span class="absolute bottom-5 right-3">{{
                cart.listLength
              }}</span>
            </div>
            <div
              class="w-[400px] bg-white absolute mt-2 right-0 py-4 px-3 border flex flex-col max-lg:hidden"
              v-show="cartHover"
            >
              <ul>
                <li
                  v-for="(item, index) in cart.cartList"
                  :key="`cart-${index}`"
                  class="flex items-center justify-between border-b border-b-[#EDEDED] py-4"
                >
                  <span>服飾:{{ item.name }}</span>
                  <span>顏色:{{ item.color.name }}</span>
                  <span>尺寸:{{ item.size }}</span>
                  <span>數量:{{ item.quantity }}</span>
                </li>
              </ul>
              <button
                class="py-4 border mt-10 hover:bg-amber-100 hover:border-amber-100"
              >
                前往結帳
              </button>
            </div>
          </li>
          <li class="mx-2 lg:hidden max-lg:block">
            <button @click="$emit('toggleSideBar')">
              <Bars3Icon
                class="h-7 w-7"
                aria-hidden="true"
                v-if="sideBarStatus"
              />
              <XMarkIcon class="h-7 w-7" aria-hidden="true" v-else />
            </button>
          </li>
        </template>
      </menu>
      <div
        class="absolute -bottom-24 w-full z-10 flex flex-col bg-white"
        v-show="searchBarStatus"
      >
        <div class="border-b border-b-[#EDEDED] flex items-center relative">
          <input
            type="text"
            class="pl-20 py-4 outline-none w-full max-lg:pl-4"
            placeholder="SEARCH搜尋..."
          />
          <div class="mr-24 absolute right-0 max-lg:mr-8">
            <MagnifyingGlassIcon class="h-7 w-7" aria-hidden="true" />
          </div>
        </div>
        <ul class="flex pl-20 py-4 max-lg:pl-4">
          <li v-for="tag in searchBarTags" class="py-1 px-4 mr-3 bg-amber-100">
            <a>{{ tag.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
defineProps(["sideBarStatus"]);
defineEmits(["toggleSideBar"]);
import { ref } from "vue";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { useCartStore } from "../services/Cart";
const cart = useCartStore();
const searchBarStatus = ref(false);
const cartHover = ref(false);

function toggleSearchBar() {
  searchBarStatus.value = !searchBarStatus.value;
}

const searchBarTags = ref([
  { id: 1, name: "紅" },
  { id: 2, name: "背心" },
  { id: 3, name: "襯衫" },
  { id: 4, name: "外套" },
]);

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
