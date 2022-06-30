import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';
import { OrderSuccessPageComponent } from './component/order-success-page/order-success-page.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { AdminProductsComponent } from './component/Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './component/Admin/admin-orders/admin-orders.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ProfileComponent } from './component/profile/profile.component';





const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'signup',component:SignUpComponent },
  { path:'login',component:LoginComponent },
  { path:'products',component:ProductsComponent },
  { path:'Shopping-cart',component:CartComponent },
  { path:'checkout-page',component:CheckoutPageComponent },
  { path:'order-successful',component:OrderSuccessPageComponent },
  { path:'my-order',component:MyOrderComponent },
  // { path:'add-product',component:AdminProductsComponent},
  { path:'settings',component:SettingsComponent},
  { path:'profile',component:ProfileComponent},
  { path:'manage-products',component:AdminProductsComponent},




];

@NgModule({
  imports: [



RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
