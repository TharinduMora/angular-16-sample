import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './store/app.state';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './modules/products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
