import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AUTH_PROVIDERS} from './_services/auth.service';
import {LoggedInGuard} from './_services/logged-in.guard';
import {HeaderComponent} from './ui/components/header/header.component';
import {FooterComponent} from './ui/components/footer/footer.component';
import {RegisterComponent} from './ui/register/register.component';
import {ForbiddenComponent} from './ui/forbidden/forbidden.component';
import {HomeComponent} from './ui/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ForbiddenComponent
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

