import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

export interface StoreItem{
  id: number,
  name: string,
  price: number,
  img: string
}

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})

export class StoreComponent {
  items: StoreItem[] = [
    {
      id: 1,
      name: "Car",
      price: 1200,
      img: ""
    },
    {
      id: 2,
      name: "Book",
      price: 1200,
      img: ""
    },
    {
      id: 3,
      name: "Computer",
      price: 1200,
      img: ""
    },
    {
      id: 4,
      name: "Banana",
      price: 1200,
      img: ""
    }
  ] 
}
