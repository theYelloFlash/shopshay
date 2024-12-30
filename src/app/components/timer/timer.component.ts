import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  num = 0;
  date = 0;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.beginSetTimeOut();
    this.date = new Date('Dec 29, 2024 17:34:00').getTime();
  }

  beginSetTimeOut() {
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.date - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (this.days <= 0 && this.hours <= 0 && this.minutes && this.seconds <= 0) {
        clearInterval(x);
      }
    }, 1000)
  }
}
