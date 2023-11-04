import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    let categoryObservable: Observable<Category[]>
    categoryObservable = categoryService.getAllParent();

    categoryObservable.subscribe((serverCategories) => {
      this.categories = serverCategories;
    })
  }

  ngOnInit(): void {

  }

}
