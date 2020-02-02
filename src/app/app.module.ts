import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { ManagerModule } from './manager/manager.module';
import { ChefBakeryModule } from './chef-bakery/chef-bakery.module';
import { ChefItalianModule } from './chef-italian/chef-italian.module';
import { ChefIndianModule } from './chef-indian/chef-indian.module';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { TestData } from './test-data';

import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { TestData }





@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HeaderModule,
    ManagerModule,
    ChefBakeryModule,
    ChefItalianModule,
    ChefIndianModule,
    InMemoryWebApiModule.forRoot(TestData),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
