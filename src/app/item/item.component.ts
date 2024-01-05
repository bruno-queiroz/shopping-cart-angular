import { Component, Input } from '@angular/core';
import { StoreItem } from '../store/store.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: StoreItem;
}
