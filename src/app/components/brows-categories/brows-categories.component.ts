import { Component } from '@angular/core';
import { HeadingData } from '../heading-component/heading-component.component';

@Component({
  selector: 'app-brows-categories',
  templateUrl: './brows-categories.component.html',
  styleUrl: './brows-categories.component.scss'
})
export class BrowsCategoriesComponent {
  headiingDataForCategories: HeadingData = {
    subheading: 'Categories',
    mainHeadng: 'Browse By Category',
    istimerRequired: false
  }

  icons = [
    {
      class: 'bi bi-phone',
      iconName: 'Phones'
    },
    {
      class: 'bi bi-laptop',
      iconName: 'Computers'
    },
    {
      class: 'bi bi-smartwatch',
      iconName: 'Smart watches'
    },
    {
      class: 'bi bi-camera',
      iconName: 'Camera'
    },
    {
      class: 'bi bi-headphones',
      iconName: 'Headphones'
    },
    {
      class: 'bi bi-controller',
      iconName: 'Gaming'
    },
    {
      class: 'bi bi-controller',
      iconName: 'Footware'
    },
    {
      class: 'bi bi-controller',
      iconName: 'Sports'
    }
  ]
}
