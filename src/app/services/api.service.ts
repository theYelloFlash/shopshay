import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../models/login.dto';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { CardData } from '../models/Icard.model';
import { CartResponse } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  environment!: string
  headers!: HttpHeaders

  constructor(private http: HttpClient) {
    this.environment = environment.Api;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.Token}`,
    });
  }

  loginApi(credentials: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.environment}/auth/login`, credentials, { headers: this.headers });
  }

  findCardByType(type: string): Observable<any> {
    return this.http.get<any>(`${this.environment}/card/${type}`, { headers: this.headers });
  }

  turnLike(uuid: string): Observable<any> {
    return this.http.put<any>(`${this.environment}/card/${uuid}`, { headers: this.headers })
  }

  getAllfavorites(): Observable<CardData[]> {
    return this.http.get<CardData[]>(`${environment.Api}/card/like/items`, { headers: this.headers })
  }

  addToCart(cartData: any): Observable<CartResponse> {
    return this.http.post<CartResponse>(`${environment.Api}/cart`, cartData);
  }

  getAllCartItems(): Observable<CartResponse[]> {
    return this.http.get<CartResponse[]>(`${environment.Api}/cart`);
  }

  deleteCartitem(uuid: string): Observable<CartResponse> {
    return this.http.put<CartResponse>(`${environment.Api}/cart/uuid/${uuid}`, null);
  }

  emptyCart(): Observable<any> {
    return this.http.put<any>(`${environment.Api}/cart/emptycart`, null)
  }
}
