import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCTS_URL } from '../shared/constants/urls';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getLastFeatured(): Observable<Product[]> {
    return this.getAll().pipe(
      map(prodotti => prodotti.slice(-5))
    );
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${PRODUCTS_URL}/${productId}`);
  }

}