import { Injectable } from '@angular/core';
import { Category } from '../shared/models/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CAT_URL, PAR_CAT_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(CAT_URL);
  }

  getAllParent(): Observable<Category[]> {
    return this.http.get<Category[]>(PAR_CAT_URL);
  }
}
