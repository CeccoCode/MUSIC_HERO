import { Injectable } from '@angular/core';
import { Category } from '../shared/models/Category';
import { sample_category } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAll(): Category[] {
    return sample_category;
  }
}
