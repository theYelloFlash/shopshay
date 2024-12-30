import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up-component/sign-up-component.component';
import { LoginComponent } from './components/login/login.component';
import { ProductdescriptionComponent } from './components/productdescription/productdescription.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { AuthGaurds } from './guards/authGaurd';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGaurds] },
  { path: 'product-description', component: ProductdescriptionComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'cart', component: CartComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
