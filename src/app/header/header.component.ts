import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCartOpen = false;

  openCart(){
    this.isCartOpen = true;
  }

  closeCart(){
    this.isCartOpen = false;
  }
}
