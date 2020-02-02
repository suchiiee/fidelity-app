import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    const INVENTORY_DATA = [
      { id: 11,foodItems: 'Flour', requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
      { id: 12, foodItems: 'Wheat' ,requiredQty : '20kg' , vendorOne: '10Kg', vendorTwo: '10kg',receivedQty : '20kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'Y' },
      { id: 13,foodItems: 'Rice' ,requiredQty : '20kg' , vendorOne: '-', vendorTwo: '20kg', receivedQty : '20kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'Y' },
      { id: 14,foodItems: 'Multigrain' ,requiredQty : '5kg' , vendorOne: '-', vendorTwo: '1kg', receivedQty : '1kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'N' },
      { id: 15,foodItems: 'Fats',requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
      { id: 16,foodItems: 'Butter' ,requiredQty : '5kg' , vendorOne: '2Kg', vendorTwo: '3kg',receivedQty : '5kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'N' },
      { id: 17,foodItems: 'Olive' ,requiredQty : '3 Ltr' , vendorOne: '3 Ltr', vendorTwo: '-', receivedQty : '3Ltr', status : 'InSufficient', bakery: 'Y', italian : 'Y', indian : 'N' },
      { id: 18,foodItems: 'Vegetable' ,requiredQty : '-' , vendorOne: '-', vendorTwo: '-', receivedQty : '-', status : 'InSufficient', bakery: 'N', italian : 'N', indian : 'Y' },
      { id: 19,foodItems: 'Vegetables',requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
      { id: 20,foodItems: 'Mushrooms' ,requiredQty : '5kg' , vendorOne: '2Kg', vendorTwo: '3kg',receivedQty : '5kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'N' },
      { id: 21,foodItems: 'Baby Corn' ,requiredQty : '5kg' , vendorOne: '3kg', vendorTwo: '2kg', receivedQty : '5kg', status : 'OK', bakery: 'N', italian : 'Y', indian : 'N' },
      { id: 22,foodItems: 'Onion' ,requiredQty : '15kg' , vendorOne: '12kg', vendorTwo: '-', receivedQty : '12kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'Y' },
      { id: 23,foodItems: 'Capsicum' ,requiredQty : '5kg' , vendorOne: '2kg', vendorTwo: '1kg', receivedQty : '3kg', status : 'InSufficient', bakery: 'N', italian : 'Y', indian : 'N' },
      { id: 24,foodItems: 'Add-Ons',requiredQty : '' , vendorOne: '', vendorTwo: '', receivedQty : '', status : '', bakery: '', italian : '', indian : '' },
      { id: 25,foodItems: 'Salts' ,requiredQty : '5kg' , vendorOne: '2Kg', vendorTwo: '3kg',receivedQty : '5kg', status : 'OK', bakery: 'Y', italian : 'Y', indian : 'Y' },
      { id: 26,foodItems: 'Olives' ,requiredQty : '5kg' , vendorOne: '3kg', vendorTwo: '2kg', receivedQty : '5kg', status : 'OK', bakery: 'Y', italian : 'N', indian : 'N' },
      { id: 27,foodItems: 'Sugar' ,requiredQty : '15kg' , vendorOne: '12kg', vendorTwo: '-', receivedQty : '12kg', status : 'InSufficient', bakery: 'Y', italian : 'N', indian : 'Y' },
      { id: 28,foodItems: 'Vanilla' ,requiredQty : '5kg' , vendorOne: '2kg', vendorTwo: '1kg', receivedQty : '3kg', status : 'InSufficient', bakery: 'Y', italian : 'N', indian : 'N' }

    ];

    const  USERS = [
      {user:"Rohit",pass:"Fidelity",role:"manager"},
      {user:"Sucheta",pass:"Fidelity",role:"italian"},
      {user:"Papa",pass:"Fidelity",role:"bakery"},
      {user:"Daddy",pass:"Fidelity",role:"indian"}
    ];



    return {INVENTORY_DATA, USERS};
  }
}
