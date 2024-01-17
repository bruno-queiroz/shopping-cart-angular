import { Component, Input, inject } from '@angular/core';
import { StoreItem } from '../store/store.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: StoreItem
  isItemAdded = false

  cartService: CartService = inject(CartService)

  addItemToCart(item: StoreItem){
    this.cartService.addToCart(item)
    this.isItemAdded = true
  }

  removeItemFromCart(id: number, removeAll = false){
    const itemToBeRemoved = this.cartService.items.find(item => item.id === id)
    if(itemToBeRemoved?.amount === 0 || removeAll){
      this.isItemAdded = false
    }
    
    this.cartService.removeFromCart(itemToBeRemoved, removeAll)
  }  
}
