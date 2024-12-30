import { Component, Input } from '@angular/core';
import { CardData } from '../../models/Icard.model';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { CartItemscountService } from './../../services/cart-itemscount.service';
import { FavoriteCounterService } from '../../services/favorite-counter.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardData!: CardData;
  isLiked = false;
  isLoggedIn = false;

  constructor(private router: Router, private apiServ: ApiService, private toastr: ToastrService,
    private cartItemServ: CartItemscountService,
    private likeCounter: FavoriteCounterService
  ) {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLiked = this.cardData.isLiked;
  }

  cardClick() {
    this.router.navigateByUrl('/product-description')
  }

  like(event: Event) {
    event.stopPropagation()
    this.isLiked = !this.isLiked
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login')
    } else {
      this.apiServ.turnLike(this.cardData.uuid).subscribe({
        next: (res) => {
          if (res.isLiked)
            this.likeCounter.increaseFavoriteCount()
          else
            this.likeCounter.decreaseFavoriteCount()
        },
        error: (err) => {
          console.error('error calling api')
        }
      })
    }
  }

  addToCart(event: Event) {
    event.stopPropagation();
    const cardData = {
      name: this.cardData.name,
      price: this.cardData.price,
      image: this.cardData.image,
      ratings: this.cardData.ratings,
      isLiked: this.cardData.isLiked,
      discount: this.cardData.discount
    }
    this.apiServ.addToCart(cardData).subscribe({
      next: (res) => {
        this.toastr.success('item added to the cart')
        this.cartItemServ.increaseCartCount();
      },
      error: (err) => {
        this.toastr.error('error adding into cart')
      }
    })
  }
}
