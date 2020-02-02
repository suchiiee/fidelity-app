
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header.component';
import { MaterialModule } from '../material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule
  ]
})
export class HeaderModule { }
