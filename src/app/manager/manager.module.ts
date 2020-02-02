import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material/material.module';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';

@NgModule({
  declarations: [ManagerComponent,  ManagerEditComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ManagerModule { }
