import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCT_URL } from '../shared/constants/urls';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_URL);
  }

  getLastFeatured(): Observable<Product[]> {
    return this.getAll().pipe(
      map(prodotti => prodotti.slice(-1))
    );
  }



}
