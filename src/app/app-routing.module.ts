import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { ChefItalianComponent } from './chef-italian/chef-italian.component';
import { ChefIndianComponent } from './chef-indian/chef-indian.component';
import { ChefBakeryComponent } from './chef-bakery/chef-bakery.component';
import { LoginComponent } from './auth/login/login.component';





const routes: Routes = [
{ path : 'login', component: LoginComponent},
 { path: '',   redirectTo: '/login', pathMatch: 'full' },
{ path : 'manager', component: ManagerComponent},
{ path : 'indian-chef', component: ChefIndianComponent},
{ path : 'italian-chef', component:  ChefItalianComponent},
{ path : 'bakery-chef', component:  ChefBakeryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
