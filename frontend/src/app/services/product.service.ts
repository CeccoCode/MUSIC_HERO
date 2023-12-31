import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCT_ID_URL, PRODUCTS_URL } from '../shared/constants/urls';
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
      map(prodotti => prodotti.slice(-9))
    );
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${PRODUCT_ID_URL}/${productId}`);
  }

}