import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './components/timer/timer.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up-component/sign-up-component.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './ngRx/auth.reducer';
import { MatMenuModule } from '@angular/material/menu';
import { ProductdescriptionComponent } from './components/productdescription/productdescription.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LogOutDialogComponent } from './components/log-out-dialog/log-out-dialog.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    ProductdescriptionComponent,
    LogOutDialogComponent,
    ContactComponentComponent,
    CartComponent,
    FavoritesComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    StoreModule.forRoot({ auth: authReducer }),
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
