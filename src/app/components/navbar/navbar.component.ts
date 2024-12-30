import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '../../ngRx/auth.reducer';
import { select, Store } from '@ngrx/store';
import { logout } from '../../ngRx/auth.actions';
import { MatDialog } from '@angular/material/dialog';
import { LogOutDialogComponent } from '../log-out-dialog/log-out-dialog.component';
import { ApiService } from '../../services/api.service';
import { CartItemscountService } from './../../services/cart-itemscount.service';
import { FavoriteCounterService } from '../../services/favorite-counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn = false
  isScrolled = false;
  isLoggedIn$!: Observable<boolean>;
  itemsIncart = 0;
  itemsLiked = 0;

  constructor(private store: Store<{ auth: AuthState }>, private dialog: MatDialog,
    private apiServ: ApiService, private cartItemServ: CartItemscountService,
    private favoriteCounter: FavoriteCounterService
  ) {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoggedIn$ = this.store.pipe(select((state) => state.auth.isLoggedIn));
    console.log(this.isLoggedIn$.subscribe((val) => { console.log(val) }));
    this.getCartItems()
    this.getAllLikeItems()

  }

  getCartItems() {
    this.apiServ.getAllCartItems().subscribe({
      next: (res) => {
        this.cartItemServ.updateCartCount(res.length);
        this.updateCartItemsLength()
      }
    })
  }

  updateCartItemsLength() {
    this.cartItemServ.cartCount$.subscribe({
      next: (res) => {
        this.itemsIncart = res
      }
    })
  }

  getAllLikeItems() {
    this.apiServ.getAllfavorites().subscribe({
      next: (res) => {
        this.favoriteCounter.updateFavoriteCount(res.length)
        this.upDateLikedItemLength()
      }
    })
  }
  upDateLikedItemLength() {
    this.favoriteCounter.favoriteCounter$.subscribe({
      next: (res) => {
        this.itemsLiked = res;
      }
    })
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;
  }

  logOut() {
    const dialogRef = this.dialog.open(LogOutDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          localStorage.clear();
          this.isLoggedIn = false;
          this.store.dispatch(logout());
        }
      }
    })
  }


}
