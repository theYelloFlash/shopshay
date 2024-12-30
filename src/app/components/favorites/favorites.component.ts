import { Component } from '@angular/core';
import { CardData } from '../../models/Icard.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  favoriteProducts: CardData[] = []

  constructor(private apiServ: ApiService) {
    this.getAllFavoriteCards()
  }

  getAllFavoriteCards() {
    this.apiServ.getAllfavorites().subscribe({
      next: (res) => {
        this.favoriteProducts = res
      }
    })
  }

}
