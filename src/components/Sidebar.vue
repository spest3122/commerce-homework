<template lang="">
  <div class="mt-24 pt-1 bg-white fixed w-full h-full">
    <div class="flex flex-col h-full text-left text-sm">
      <ul class="flex flex-col">
        <li
          v-for="(shop, index) in shopAllList"
          :key="`shopall-${shop.id}`"
          class="p-4 flex flex-col"
          @click="() => toggleFunction(index)"
        >
          <div class="flex items-center justify-between">
            <div class="font-bold cursor-pointer">{{ shop.theme }}</div>
            <ChevronUpIcon
              class="h-4 w-4"
              aria-hidden="true"
              v-if="shop.show"
            />
            <ChevronDownIcon class="h-4 w-4" aria-hidden="true" v-else />
          </div>
          <ul class="flex flex-col mt-2" v-show="shop.show">
            <li
              v-for="subShop in shop.lists"
              :key="`${shop.id}-${subShop.id}`"
              class="mb-1"
            >
              <span class="hover:border-b hover:border-b-black cursor-pointer">
                {{ subShop.name }}
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

function toggleFunction(index) {
  shopAllList["value"][index]["show"] = !shopAllList["value"][index]["show"];
}

const shopAllList = ref([
  {
    id: 1,
    theme: "品牌主打",
    show: false,
    lists: [
      { id: 1, name: "本週新品" },
      { id: 2, name: "2024人氣必買清單保暖發熱衣系列" },
      { id: 3, name: "鋪棉單品專區" },
      { id: 4, name: "迎新年。時髦紅色單品顯瘦美圇褲系列" },
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
    show: true,
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
    show: false,
    lists: [
      { id: 14, name: "PPP品牌限定系列" },
      { id: 15, name: "&IN THING個性系列" },
      { id: 16, name: "Aa小羊工作室系列" },
    ],
  },
  {
    id: 4,
    theme: "配件",
    show: false,
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
    show: false,
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
    show: false,
    lists: [
      { id: 34, name: "內衣內褲" },
      { id: 35, name: "家居服" },
    ],
  },
  {
    id: 7,
    theme: "美圖系列",
    show: false,
    lists: [
      { id: 36, name: "美圇褲全系列" },
      { id: 37, name: "顯瘦" },
    ],
  },
]);
</script>
<style lang=""></style>
