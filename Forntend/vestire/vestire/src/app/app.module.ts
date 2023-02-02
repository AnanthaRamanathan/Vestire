import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { OrderComponent } from './Component/order/order.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { ProductComponent } from './Component/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    CartComponent,
    OrderComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
