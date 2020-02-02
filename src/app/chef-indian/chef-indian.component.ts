import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager/manager.service';

@Component({
  selector: 'app-chef-indian',
  templateUrl: './chef-indian.component.html',
  styleUrls: ['./chef-indian.component.scss']
})
export class ChefIndianComponent implements OnInit {

  displayedColumns: string[] = ['foodItems','requiredQty', 'receivedQty', 'status'];
  datasource;

  isReadOnly : true;
  constructor(private inventorySrv: ManagerService) {

   this.inventorySrv.getInventoryListChefIndian().then(data =>{
        this.datasource = data;
      });



   }

  ngOnInit() {
  }

}
