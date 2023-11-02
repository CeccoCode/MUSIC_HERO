import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.getAll();
  }

  ngOnInit(): void {

  }

}
