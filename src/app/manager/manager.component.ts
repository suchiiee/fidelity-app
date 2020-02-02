import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';
import { MatDialog } from '@angular/material/dialog';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';

export interface PeriodicElement {
  id:number;
  foodItems : string;
  requiredQty: string;
  vendorOne: string;
  vendorTwo: string;
  receivedQty: string;
  status: string;
  bakery: string;
  italian: string;
  indian: string;
}



@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {


  displayedColumns: string[] = ['foodItems','requiredQty', 'vendorOne', 'vendorTwo', 'receivedQty', 'status', 'bakery', 'italian', 'indian','actions'];
  dataSource;

  isReadOnly = true;
  isActive = false;



  constructor( private inventorySrv: ManagerService,public dialog: MatDialog) {

    this.inventorySrv.getInventoryData().subscribe( data => {
        this.dataSource = data;

    });

   }

  ngOnInit() {
  }

  startEdit(element:PeriodicElement) {

    const dialogRef = this.dialog.open(ManagerEditComponent, {
      data: {element},
      width: '25vw',

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

      }
    });
  }



  editTable(){
    this.isReadOnly = false ;
    this.isActive = true;
    console.log("Ëdit Table");
  }

  saveTable(){
    console.log("table Saved")
  }

}
