import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  title = 'Parent Component';

  listProduct = [
    { id: 1, name: 'Apel', price: 5000, qty: 6 },
    { id: 2, name: 'Melon', price: 6000, qty: 11 },
    { id: 3, name: 'Anggur', price: 9000, qty: 10 },
    { id: 4, name: 'Jeruk', price: 7000, qty: 24 },
    { id: 5, name: 'Durian', price: 11000, qty: 6 },
  ];

  product = this.listProduct;

  increment = (idp: number) => {
    this.listProduct.map((e) => {
      if (e.id === idp) {
        e.qty++;
      }
    });
  };

  decrement = (idp: number) => {
    this.listProduct.map((e) => {
      if (e.id === idp) {
        e.qty--;
      }
    });
  };
}
