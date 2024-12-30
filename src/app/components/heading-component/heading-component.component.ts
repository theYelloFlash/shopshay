import { Component, Input } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-heading-component',
  templateUrl: './heading-component.component.html',
  styleUrl: './heading-component.component.scss'
})
export class HeadingComponentComponent {
  @Input() headingData!: HeadingData;
  constructor(private scrollServ: ScrollService) {
  }
  scrollCards(direction: 'left' | 'right') {
    this.scrollServ.triggeredScroll(direction)
  }
}


export interface HeadingData {
  subheading: string
  mainHeadng: string
  istimerRequired: boolean
}
