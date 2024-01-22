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
  items: StoreItem[] = []

  constructor(){
    this.getItems().then(data => {
      this.items = data
    })
  }

  async getItems(){
    const response = await fetch("http://localhost:3000/items")
    const data: StoreItem[] = await response.json()

    return data
  }
}
