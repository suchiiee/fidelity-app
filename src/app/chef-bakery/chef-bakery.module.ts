import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefBakeryComponent } from './chef-bakery.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ChefBakeryComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChefBakeryModule { }
