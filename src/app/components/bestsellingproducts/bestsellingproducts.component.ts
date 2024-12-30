import { Component } from '@angular/core';
import { HeadingData } from '../heading-component/heading-component.component';
import { CardData } from '../../models/Icard.model';
import { ApiService } from '../../services/api.service';
import { EnumCardType } from '../../enum/cardTypeEnum';

@Component({
  selector: 'app-bestsellingproducts',
  templateUrl: './bestsellingproducts.component.html',
  styleUrl: './bestsellingproducts.component.scss'
})
export class BestsellingproductsComponent {

  cardDataForBestSellingProducts!: CardData[];

  headingDataForBestSellng: HeadingData = {
    subheading: 'This Month',
    mainHeadng: 'Best Selling Products',
    istimerRequired: false
  }
  constructor(private apiServ: ApiService) {
    this.getbestSellingProducts();
  }

  getbestSellingProducts() {
    this.apiServ.findCardByType(EnumCardType.BestSale).subscribe({
      next: (data) => {
        this.cardDataForBestSellingProducts = data;
      }
    })
  }
}
