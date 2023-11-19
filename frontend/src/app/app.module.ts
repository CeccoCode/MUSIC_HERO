import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CategorySectionComponent } from './components/partials/category-section/category-section.component';
import { ProductsGridComponent } from './components/partials/products-grid/products-grid.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './components/partials/product-card/product-card.component';
import { FeaturedComponent } from './components/partials/featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategorySectionComponent,
    ProductsGridComponent,
    ProductsComponent,
    ProductCardComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
