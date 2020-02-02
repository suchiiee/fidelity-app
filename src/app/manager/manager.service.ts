import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from './manager.component';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  apiUrl = 'api/INVENTORY_DATA';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  getInventoryById(id:number):Observable<PeriodicElement>{
    return this.http.get<PeriodicElement>(this.apiUrl+"/"+id);
  }

  updateInventory(inventory: PeriodicElement): Observable<number> {
    return this.http.put<number>(this.apiUrl+"/"+inventory.id, inventory, this.httpOptions);
  }

}
