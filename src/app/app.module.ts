import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';
import { OrderSuccessPageComponent } from './component/order-success-page/order-success-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { AdminProductsComponent } from './component/Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './component/Admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProductsComponent,
    CartComponent,
    CheckoutPageComponent,
    OrderSuccessPageComponent,
    NavbarComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
