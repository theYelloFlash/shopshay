import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FlashsalesComponent } from '../flashsales/flashsales.component';
import { BrowsCategoriesComponent } from '../brows-categories/brows-categories.component';
import { BestsellingproductsComponent } from '../bestsellingproducts/bestsellingproducts.component';
import { ExploreProductsComponent } from '../explore-products/explore-products.component';
import { NewArrivalComponent } from '../new-arrival/new-arrival.component';
import { ExtraServicesComponent } from '../brows-categories/extra-services/extra-services.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeadingComponentComponent } from '../heading-component/heading-component.component';
import { TimerComponent } from '../timer/timer.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    FlashsalesComponent,
    BrowsCategoriesComponent,
    BestsellingproductsComponent,
    ExploreProductsComponent,
    NewArrivalComponent,
    ExtraServicesComponent,
    HeadingComponentComponent,
    TimerComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatListModule,
    SharedModule

  ]
})
export class HomeModule { }
