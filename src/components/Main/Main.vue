<template lang="">
  <main class="pt-24 flex h-full max-lg:flex-col">
    <section class="w-1/2 max-lg:w-full" ref="scrollRef">
      <img v-for="i in 3" :src="`/src/assets/picture${i}.png`" />
    </section>
    <section
      class="w-1/2 relative flex justify-center items-center max-lg:w-full"
    >
      <div
        class="fixed flex flex-col w-1/3 max-lg:relative max-lg:w-full max-lg:px-4 max-lg:pb-20"
      >
        <div class="flex justify-end mb-4 max-lg:mt-2">
          <HeartIcon class="w-7 h-7" />
        </div>
        <div class="flex justify-between text-xl mb-5">
          <p>就是圖片一圖片一</p>
          <p>NT. 100000</p>
        </div>
        <div class="flex items-center justify-between mb-8">
          <div class="border border-black p-1">
            <div class="w-6 h-6 bg-black"></div>
          </div>
          <p>黑</p>
        </div>
        <ul class="flex mb-8">
          <li
            v-for="size in sizeList"
            :key="`size-${size.id}`"
            :class="[
              sizeSelect === size.size ? 'border border-black' : '',
              'px-2 py-1 mr-3 cursor-pointer',
            ]"
            @click="sizeSelect = size.size"
          >
            {{ size.size }}
          </li>
        </ul>
        <div
          class="flex justify-between items-center border border-black py-3 px-1 mb-3"
        >
          <MinusIcon
            class="w-4 h-4 cursor-pointer"
            @click="() => plusOrMinus('-')"
          />
          <input
            type="text"
            readonly
            :value="count < 10 ? '0' + count : count"
            class="text-center outline-none text-sm"
          />
          <PlusIcon
            class="w-4 h-4 cursor-pointer"
            @click="() => plusOrMinus('+')"
          />
        </div>
        <div class="flex justify-between mb-3 max-lg:hidden">
          <button
            class="border border-black flex-auto py-3 hover:bg-amber-100 hover:border-amber-100"
          >
            {{ sizeSelect === "" ? "請選擇尺寸" : "立即結帳" }}
          </button>
          <div class="w-2.5"></div>
          <button class="flex-auto text-white bg-black py-3">
            {{ sizeSelect === "" ? "請選擇尺寸" : "加入購物車" }}
          </button>
        </div>
        <div class="h-[1px] w-full bg-[#EDEDED]"></div>
        <ul class="flex py-4 justify-between">
          <li
            v-for="(stock, index) in stockInfo"
            :key="`sotck-${stock.id}`"
            :class="[
              currentCom === index ? 'font-bold border-b border-black' : '',
              'cursor-pointer',
            ]"
            @click="() => switchInfo(index)"
          >
            {{ stock.name }}
          </li>
        </ul>
        <component :is="stockInfo[currentCom]['com']"></component>
      </div>
    </section>
    <StickyBottom />
  </main>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { HeartIcon, PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";

import StockInfo from "./StockInfo.vue";
import WashWay from "./WashWay.vue";
import StickyBottom from "./StickyBottom.vue";

const count = ref(1);
const sizeSelect = ref("");
const currentCom = ref(0);
const scrollRef = ref(null);
let lastScrollTime = 0;

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

function onScroll() {
  const now = Date.now();
  if (now - lastScrollTime > 300) {
    lastScrollTime = now;

    console.log(window.innerHeight, window.scrollY, document.body.scrollHeight);
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 500
    ) {
      console.log("you reach to the bottom");
    }
  }
}

function switchInfo(index) {
  currentCom.value = index;
}

function plusOrMinus(type) {
  if (type === "-") {
    if (count.value >= 2) {
      count.value -= 1;
    }
  } else if (type === "+") {
    if (count.value <= 99) {
      count.value += 1;
    }
  }
}

const stockInfo = ref([
  { id: 1, name: "商品資訊", com: StockInfo },
  { id: 2, name: "洗滌方式", com: WashWay },
  { id: 3, name: "尺寸指南", com: WashWay },
]);

const sizeList = ref([
  { id: 1, size: "S-" },
  { id: 2, size: "S" },
  { id: 2, size: "S+" },
]);
</script>
<style lang=""></style>
