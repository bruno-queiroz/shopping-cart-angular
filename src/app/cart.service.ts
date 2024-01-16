import { Injectable } from "@angular/core";
import { StoreItem } from "./store/store.component"

export type CartItem = StoreItem & { amount: number } 

@Injectable({
    providedIn: 'root'
})
export class CartService{
    items: CartItem[] = [
        {
            id: 1,
            name: "Car",
            price: 1200,
            img: "./assets/banana.jpg",
            amount: 1
        },
    ];

    addToCart(storeItem: StoreItem){
        const itemSelected = this.items.find(item => storeItem.id === item.id);
    
        if(itemSelected){
          itemSelected.amount++
          return
        }

       const newCartItem = { ...storeItem, amount: 1 }
       this.items.push(newCartItem)
    }
}