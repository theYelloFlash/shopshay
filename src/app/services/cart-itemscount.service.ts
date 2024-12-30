import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemscountService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() { }

  updateCartCount(count: number): void {
    this.cartCountSubject.next(count);
  }


  increaseCartCount(): void {
    this.cartCountSubject.next(this.cartCountSubject.value + 1)
  }


  decreaseCartCountValue(): void {
    if (this.cartCountSubject.value > 0) {
      this.cartCountSubject.next(this.cartCountSubject.value - 1)
    }
  }
}
