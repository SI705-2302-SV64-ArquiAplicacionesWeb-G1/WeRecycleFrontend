import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resource } from '../models/resource';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ResourseService {
  private url = `${base_url}/RecursoCenterController `;
  private listaCambio = new Subject<Resource[]>();
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Resource[]>(this.url);
  }

  insert(r: Resource){
    return this.http.post(this.url, r);
  }

  setList(listaCambio: Resource[]){
    this.listaCambio.next(listaCambio);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Resource>(`${this.url}/${id}`);
    }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(u: Resource) {
    return this.http.put(this.url, u);
    }
}
