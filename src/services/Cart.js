import { defineStore } from "pinia";
export const useCartStore = defineStore("counter", {
  state: () => {
    let cartListFromStorage = localStorage.getItem("cart") || [];
    if (cartListFromStorage.length > 0) {
      cartListFromStorage = JSON.parse(cartListFromStorage);
    }

    return {
      cartList: cartListFromStorage,
    };
  },
  getters: {
    listLength: (state) => state.cartList.length,
  },
  actions: {
    addCart({ name, color, size, quantity }) {
      let tempList = this.cartList;
      let sameItem = tempList.some(
        (item) =>
          item.name === name && item.color === color && item.size === size
      );
      if (sameItem) {
        tempList.map((item) => {
          if (
            item.name === name &&
            item.color === color &&
            item.size === size
          ) {
            item.quantity += quantity;
          }
        });
      } else {
        tempList.push({
          name: name,
          color: color,
          size: size,
          quantity: quantity,
        });
      }
      localStorage.setItem("cart", JSON.stringify(tempList));
      this.cartList = tempList;
    },
  },
});
