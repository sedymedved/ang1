import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoggedInGuard} from './_services/logged-in.guard';
import {FooterComponent} from './ui/components/footer/footer.component';
import {HeaderComponent} from './ui/components/header/header.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent
  ],
  providers: [
    LoggedInGuard,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

