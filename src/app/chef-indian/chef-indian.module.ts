import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefIndianComponent } from './chef-indian.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [ChefIndianComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChefIndianModule { }
