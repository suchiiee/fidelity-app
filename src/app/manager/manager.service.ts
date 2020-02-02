import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from './manager.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  apiUrl = 'api/INVENTORY_DATA';
  constructor( private http: HttpClient) { }

  getInventoryData(){
    return this.http.get(this.apiUrl);
  }

  async getInventoryListChefBakery(){
    return await this.http.get<PeriodicElement[]>(this.apiUrl).pipe(
      map(inventory => inventory.filter(inventory_name=> inventory_name.bakery=='Y'|| inventory_name.bakery=='')));
  }

  async getInventoryListChefIndian(){
    return await this.http.get<PeriodicElement[]>(this.apiUrl).pipe(
      map(inventory => inventory.filter(inventory_name=> inventory_name.indian=='Y'|| inventory_name.indian=='')));
  }

  async getInventoryListChefItalian(){
    return await this.http.get<PeriodicElement[]>(this.apiUrl).pipe(
      map(inventory => inventory.filter(inventory_name=> inventory_name.italian=='Y'|| inventory_name.italian=='')));
  }

}
