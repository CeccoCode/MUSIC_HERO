import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCTS_URL, PRODUCT_CATEGORY } from '../shared/constants/urls';
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

  addProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(PRODUCTS_URL, productData);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${PRODUCTS_URL}/${productId}`);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${PRODUCTS_URL}/${productId}`);
  }


  getProductsByCategory(categoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${PRODUCT_CATEGORY}/${categoryId}`);
  }
}