import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('fadeInSequence', [
      transition(':enter', [
        sequence([
          style({ opacity: 0 }),
          // First div animation
          animate('1s ease-in', style({ opacity: 1 })),
          // Delay and then second div animation
          animate('1s 0.3s ease-in', style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
})
export class AboutComponent {

}
