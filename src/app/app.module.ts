import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
