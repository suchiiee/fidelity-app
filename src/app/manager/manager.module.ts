import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material/material.module';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManagerComponent,  ManagerEditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents : [ManagerEditComponent]
})
export class ManagerModule { }
