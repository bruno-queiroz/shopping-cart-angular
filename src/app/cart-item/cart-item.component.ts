import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartItem } from '../cart.service';
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
}
