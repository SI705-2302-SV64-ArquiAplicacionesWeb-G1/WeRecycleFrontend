import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { RecyclingCenter } from '../models/RecyclingCenter';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RecyclingCenterService {
  private url=`${base_url}/RecyclingCenterController`;
  private listaCambio=new Subject<RecyclingCenter[]>();


  constructor(private http:HttpClient) {
    
   }

   list() {
    return this.http.get<RecyclingCenter[]>(this.url);
  }


  insert(rec: RecyclingCenter) {
    return this.http.post(this.url, rec);
  }

  setList(listaNueva: RecyclingCenter[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(rec: RecyclingCenter) {
    return this.http.put(this.url, rec);
    }

}
