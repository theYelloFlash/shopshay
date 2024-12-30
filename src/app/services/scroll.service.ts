import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollAction = new Subject<'left' | 'right'>();
  scrollAction$ = this.scrollAction.asObservable();

  triggeredScroll(direction: 'left' | 'right') {
    this.scrollAction.next(direction);
  }
}
