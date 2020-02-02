import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';

export interface PeriodicElement {
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


  displayedColumns: string[] = ['foodItems','requiredQty', 'vendorOne', 'vendorTwo', 'receivedQty', 'status', 'bakery', 'italian', 'indian'];
  dataSource;

  isReadOnly = true;
  isActive = false;



  constructor( private inventorySrv: ManagerService) {
//testing
    this.inventorySrv.getInventoryData().subscribe( data => {
        this.dataSource = data;

    });

   }

  ngOnInit() {
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
