import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CategorySectionComponent } from './components/partials/category-section/category-section.component';
import { ProductsGridComponent } from './components/partials/products-grid/products-grid.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './components/partials/product-card/product-card.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { FormModalComponent } from './components/modal/form-modal/form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { CategoryProductsComponent } from './components/pages/category-products/category-products.component';
import { RegisterComponent } from './components/modal/register/register.component';
import { LoginComponent } from './components/modal/login/login.component';
import { FormsModule } from '@angular/forms';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { AdminPanelComponent } from './components/pages/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategorySectionComponent,
    ProductsGridComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductPageComponent,
    CartPageComponent,
    TitleComponent,
    FormModalComponent,
    InputContainerComponent,
    CategoryProductsComponent,
    RegisterComponent,
    LoginComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    PaymentPageComponent,
    AdminPanelComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
