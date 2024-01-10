import { Component, Input } from '@angular/core';
import { StoreItem } from '../store/store.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: StoreItem;
  isItemAdded = true;
  amount = 1;

  addItemToCart(){
    this.isItemAdded = true
    console.log('adding item')
  }

  increaseAmount(){
    this.amount++
  }
}
