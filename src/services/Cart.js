import { defineStore } from "pinia";
export const useCartStore = defineStore("counter", {
  /**
   *
   * {
   *    name: 'cloths',
   *    color: 'black',
   *    size: 'S+',
   *    quantity: 3
   * }
   */
  state: () => ({ cartList: [] }),
  getters: {},
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
      this.cartList = tempList;
    },
  },
});
