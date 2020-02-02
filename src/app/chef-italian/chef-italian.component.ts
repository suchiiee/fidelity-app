import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager/manager.service';


@Component({
  selector: 'app-chef-italian',
  templateUrl: './chef-italian.component.html',
  styleUrls: ['./chef-italian.component.scss']
})
export class ChefItalianComponent implements OnInit {

  displayedColumns: string[] = ['foodItems','requiredQty', 'receivedQty', 'status'];
  datasource;

  isReadOnly : true;
  constructor(private inventorySrv: ManagerService) {

   this.inventorySrv.getInventoryListChefItalian().then(data =>{
        this.datasource=data;
      });



   }

  ngOnInit() {
  }
}
