import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForbiddenComponent} from './ui/forbidden/forbidden.component';
import {RegisterComponent} from './ui/register/register.component';
import {LoginComponent} from './ui/login/login.component';
import {HomeComponent} from './ui/home/home.component';
import {AboutComponent} from './ui/about/about.component';
import {LoggedInGuard} from './_services/logged-in.guard';
import {PageNotFoundComponent} from './ui/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [LoggedInGuard]},
  {path: 'about-us', redirectTo: 'about'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
