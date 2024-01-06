import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LandingComponent } from './Components/landing/landing.component';
import { SearchComponent } from './Components/search/search.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './Guards/auth.guard'; // Replace 'auth.guard' with the actual guard file name

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'Home', component: CatalogComponent, canActivate: [AuthGuard] },
      { path: 'Search', component: SearchComponent, canActivate: [AuthGuard] },
      { path: 'Movie/:id', component: MovieDetailsComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
