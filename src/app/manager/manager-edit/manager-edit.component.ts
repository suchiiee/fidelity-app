import { ManagerService } from './../manager.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PeriodicElement } from '../manager.component';


@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.scss']
})
export class ManagerEditComponent {

  constructor(public dialogRef: MatDialogRef<ManagerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public inventorySrv: ManagerService ) {
    }

formControl = new FormControl('', [
Validators.required
]);

onNoClick(): void {
this.dialogRef.close();
}

stopEdit(data:PeriodicElement): void {
 this.inventorySrv.getInventoryById(data.id).subscribe(
   inventory =>{
      this.inventorySrv.updateInventory(data);
   });

   this.inventorySrv.updateInventory(data).subscribe(data=>
    {
      this.inventorySrv.getInventoryData();
    });
}

}
