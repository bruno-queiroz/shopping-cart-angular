import { Component, Input, inject } from '@angular/core';
import { StoreItem } from '../store/store.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: StoreItem;
  cartService: CartService = inject(CartService);

  addItemToCart(item: StoreItem) {
    this.cartService.addToCart(item);
  }

  removeItemFromCart(id: number, removeAll = false) {
    const itemToBeRemoved = this.cartService.items.find(
      (item) => item.id === id,
    );

    this.cartService.removeFromCart(itemToBeRemoved, removeAll);
  }
}
