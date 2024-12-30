import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from './../../services/scroll.service';
import { Subscription } from 'rxjs';
import { HeadingData } from '../heading-component/heading-component.component';
import { CardData } from '../../models/Icard.model';
import { ApiService } from '../../services/api.service';
import { EnumCardType } from '../../enum/cardTypeEnum';

@Component({
  selector: 'app-flashsales',
  templateUrl: './flashsales.component.html',
  styleUrl: './flashsales.component.scss'
})
export class FlashsalesComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef
  cardDataForFlashSales!: CardData[];
  private subscription!: Subscription
  headingDataForFlashSale: HeadingData = {
    subheading: "Today's",
    mainHeadng: 'Flash Sales',
    istimerRequired: true
  }
  constructor(private scrollServ: ScrollService,
    private apiServ: ApiService
  ) {
    this.getAllFlashSales();
    this.subscription = this.scrollServ.scrollAction$.subscribe((direction) => {
      this.scroll(direction)
    })
  }


  getAllFlashSales() {
    this.apiServ.findCardByType(EnumCardType.Flahsale).subscribe({
      next: (data) => {
        console.log(data)
        this.cardDataForFlashSales = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  scroll(direction: 'left' | 'right') {
    const div = this.cardContainer.nativeElement;
    const div_width = div.offsetWidth - 100;
    if (direction == 'left') {
      div.scrollBy({
        left: -div_width,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      div.scrollBy({
        left: div_width,
        behavior: 'smooth',
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
