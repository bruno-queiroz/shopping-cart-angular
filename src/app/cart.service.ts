import { Injectable } from '@angular/core';
import { StoreItem } from './store/store.component';

export type CartItem = StoreItem & { amount: number };

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  addToCart(storeItem: StoreItem) {
    const itemSelected = this.items.find((item) => storeItem.id === item.id);

    if (itemSelected) {
      itemSelected.amount++;
      return;
    }

    const newCartItem = { ...storeItem, amount: 1 };
    this.items.push(newCartItem);
  }

  removeFromCart(itemToBeRemoved: CartItem | undefined, removeAll = false) {
    if (!itemToBeRemoved) return;

    if (itemToBeRemoved.amount > 1 && !removeAll) {
      itemToBeRemoved.amount--;
      return;
    }

    let index = -1;
    this.items.forEach((item, i) => {
      if (item.id === itemToBeRemoved.id) {
        index = i;
      }
    });
    this.items.splice(index, 1);
    console.log(this.items);
  }

  getItemById(id: number) {
    return this.items.find((item) => item.id === id);
  }

  calculateTotalValue() {
    const total = this.items.reduce(
      (acc, item) => item.price * item.amount + acc,
      0,
    );
    return total;
  }

  calculateCartItemsAmount() {
    const amount = this.items.reduce((acc, item) => item.amount + acc, 0);
    return amount;
  }
}
