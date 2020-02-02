import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager/manager.service';

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

const ELEMENT_DATA: PeriodicElement[] = [
  { foodItems: 'Flour',requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
  { foodItems: 'Wheat' ,requiredQty : '20kg' , vendorOne: '10Kg', vendorTwo: '10kg',receivedQty : '20kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'Y' },
  { foodItems: 'Rice' ,requiredQty : '20kg' , vendorOne: '-', vendorTwo: '20kg', receivedQty : '20kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'Y' },
  { foodItems: 'Multigrain' ,requiredQty : '5kg' , vendorOne: '-', vendorTwo: '1kg', receivedQty : '1kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'N' },
  { foodItems: 'Fats',requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
  { foodItems: 'Butter' ,requiredQty : '5kg' , vendorOne: '2Kg', vendorTwo: '3kg',receivedQty : '5kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'N' },
  { foodItems: 'Olive' ,requiredQty : '3 Ltr' , vendorOne: '3 Ltr', vendorTwo: '-', receivedQty : '3Ltr', status : 'InSufficient', bakery: 'Y', italian : 'Y', indian : 'N' },
  { foodItems: 'Vegetable' ,requiredQty : '-' , vendorOne: '-', vendorTwo: '-', receivedQty : '-', status : 'InSufficient', bakery: 'N', italian : 'N', indian : 'Y' },
  { foodItems: 'Vegetables',requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
  { foodItems: 'Mushrooms' ,requiredQty : '5kg' , vendorOne: '2Kg', vendorTwo: '3kg',receivedQty : '5kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'N' },
  { foodItems: 'Baby Corn' ,requiredQty : '5kg' , vendorOne: '3kg', vendorTwo: '2kg', receivedQty : '5kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'N' },
  { foodItems: 'Onion' ,requiredQty : '15kg' , vendorOne: '12kg', vendorTwo: '-', receivedQty : '12kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'Y' },
  { foodItems: 'Capsicum' ,requiredQty : '5kg' , vendorOne: '2kg', vendorTwo: '1kg', receivedQty : '3kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'N' },
  { foodItems: 'Add-Ons',requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
  { foodItems: 'Salts' ,requiredQty : '5kg' , vendorOne: '2Kg', vendorTwo: '3kg',receivedQty : '5kg', status : 'OK', bakery: 'Y', italian : 'Y', indian : 'Y' },
  { foodItems: 'Olives' ,requiredQty : '5kg' , vendorOne: '3kg', vendorTwo: '2kg', receivedQty : '5kg', status : 'OK', bakery: 'Y', italian : 'N', indian : 'N' },
  { foodItems: 'Sugar' ,requiredQty : '15kg' , vendorOne: '12kg', vendorTwo: '-', receivedQty : '12kg', status : 'InSufficient', bakery: 'Y', italian : 'N', indian : 'Y' },
  { foodItems: 'Vanilla' ,requiredQty : '5kg' , vendorOne: '2kg', vendorTwo: '1kg', receivedQty : '3kg', status : 'InSufficient', bakery: 'Y', italian : 'N', indian : 'N' },

];


@Component({
  selector: 'app-chef-bakery',
  templateUrl: './chef-bakery.component.html',
  styleUrls: ['./chef-bakery.component.scss']
})
export class ChefBakeryComponent implements OnInit {

  displayedColumns: string[] = ['foodItems','requiredQty', 'receivedQty', 'status'];
  datasource;

  isReadOnly : true;
  constructor(private inventorySrv: ManagerService) {

   this.inventorySrv.getInventoryListChefBakery().then(data =>{
        this.datasource=data;
      });



   }

  ngOnInit() {
  }

}
