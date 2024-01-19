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
      name: "Banana",
      price: 1,
      img: "./assets/banana.jpg"
    },
    {
      id: 2,
      name: "Book",
      price: 10,
      img: "./assets/book.jpg"
    },
    {
      id: 3,
      name: "Car",
      price: 1800,
      img: "./assets/car.jpg"
    },
    {
      id: 4,
      name: "Computer",
      price: 900,
      img: "./assets/computer.jpg"
    }
  ] 
}
