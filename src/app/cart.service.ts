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
}