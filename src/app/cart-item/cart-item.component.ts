import { Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartItem, CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ CommonModule, MatIconModule ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  cartService: CartService = inject(CartService)

  
}
