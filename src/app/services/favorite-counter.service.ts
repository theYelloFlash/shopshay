import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCounterService {
  private favroriteSubject = new BehaviorSubject<number>(0);
  favoriteCounter$ = this.favroriteSubject.asObservable()

  constructor() { }

  updateFavoriteCount(count: number) {
    this.favroriteSubject.next(count);
  }

  increaseFavoriteCount() {
    this.favroriteSubject.next(this.favroriteSubject.value + 1)
  }

  decreaseFavoriteCount() {
    if (this.favroriteSubject.value > 0) {
      this.favroriteSubject.next(this.favroriteSubject.value - 1)
    }
  }
}
