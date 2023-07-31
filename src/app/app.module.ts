import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './store/app.state';
import { HttpClientModule } from '@angular/common/http';
import { AuthState } from './store/auth/auth.state';
import { DirectiveModule } from './core/directives/directive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DirectiveModule,
    NgxsModule.forRoot([AppState, AuthState], {
      developmentMode: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
