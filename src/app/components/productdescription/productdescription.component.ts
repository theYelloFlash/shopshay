import { Component } from '@angular/core';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrl: './productdescription.component.scss'
})
export class ProductdescriptionComponent {
  productQuantity = 1;

  constructor() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  quntityChange(action: string) {
    if (action == 'increase') {
      this.productQuantity++;
    } else {
      this.productQuantity--;
    }

  }
}
