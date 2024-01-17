import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CommonModule, MatIconModule, CartItemComponent ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  cartItems: CartItem[] = [];

  @Input() isCartOpen!: boolean;
  @Output() closeCartEvent = new EventEmitter();

  constructor(){
    this.cartItems = this.cartService.items;
  }

  closeCart() {
    this.closeCartEvent.emit();
  }
}
