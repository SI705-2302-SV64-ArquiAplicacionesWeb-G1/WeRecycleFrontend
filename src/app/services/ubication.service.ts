import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { Ubication } from '../models/ubication';


const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class UbicationService {
  private url=`${base_url}/ubications`;
  private listaCambio=new Subject<Ubication[]>();

  userLocation?:[number,number];
  get isUserLocationReady():boolean{
    return !!this.userLocation;
  }

  constructor(private http: HttpClient) {
   
   }

  
  list() {
    return this.http.get<Ubication[]>(this.url);
  }


  insert(ubi: Ubication): Observable<Ubication> {
    return this.http.post<Ubication>(this.url, ubi);
  }

  setList(listaNueva: Ubication[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Ubication>(`${this.url}/${id}`);
    }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(u: Ubication) {
    return this.http.put(this.url, u);
    }


}
