import { Component } from '@angular/core';
import { HeadingData } from '../heading-component/heading-component.component';
import { CardData } from '../../models/Icard.model';
import { ApiService } from '../../services/api.service';
import { EnumCardType } from '../../enum/cardTypeEnum';

@Component({
  selector: 'app-explore-products',
  templateUrl: './explore-products.component.html',
  styleUrl: './explore-products.component.scss'
})
export class ExploreProductsComponent {
  cardDataForExploreProducts!: CardData[];
  headingForExplore: HeadingData = {
    subheading: 'Our Products',
    mainHeadng: 'Explore our Products',
    istimerRequired: false
  }

  constructor(private apiServ: ApiService) {
    this.getAllExpolreProducts();
  }


  getAllExpolreProducts() {
    this.apiServ.findCardByType(EnumCardType.Explore).subscribe({
      next: (res) => {
        this.cardDataForExploreProducts = res;
      }
    })
  }


}
