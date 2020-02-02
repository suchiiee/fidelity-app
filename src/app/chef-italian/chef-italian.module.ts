import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefItalianComponent } from './chef-italian.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ChefItalianComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChefItalianModule { }
