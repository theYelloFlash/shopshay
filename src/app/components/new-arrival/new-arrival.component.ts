import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeadingData } from '../heading-component/heading-component.component';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.scss'
})
export class NewArrivalComponent {
  @ViewChild('playStation') playStationDiv!: ElementRef
  @ViewChild('secondDiv') secondDiv!: ElementRef
  hedadingDataForNewArrival: HeadingData = {
    subheading: 'Featured',
    mainHeadng: 'New Arrival',
    istimerRequired: false
  }

  constructor() {
  }

  ngOnInit(): void {
    const playstationHeight = document.getElementById('playStation')
    console.log(playstationHeight)
    if (this.secondDiv) {
      this.secondDiv.nativeElement.style.height = playstationHeight;
    }
  }
}
