import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../models/events';
import { environment } from 'src/environments/environment';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private url=`${base_url}/EventsControlller`;
  private listaCambio=new Subject<Events[]>();

  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Events[]>(this.url);
  }


  insert(rec: Events) {
    return this.http.post(this.url, rec);
  }

  setList(listaNueva: Events[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(rec: Events) {
    return this.http.put(this.url, rec);
    }
}
