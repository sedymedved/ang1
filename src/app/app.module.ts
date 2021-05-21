import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoggedInGuard} from './_services/logged-in.guard';
import {FooterComponent} from './ui/components/footer/footer.component';
import {HeaderComponent} from './ui/components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent
  ],
  providers: [
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

