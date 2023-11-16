import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecyclableMaterial } from '../models/recyclable-material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class RecyclableMaterialService {
  private url = `${base_url}/RecyclableMaterialController`;
  private listaCambio = new Subject<RecyclableMaterial[]>();
  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<RecyclableMaterial[]>(this.url,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
    
  }
  insert(recyclableMaterial: RecyclableMaterial) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, recyclableMaterial,{
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json'),
    });
    
  }

  setlist(listaNueva: RecyclableMaterial[]) {
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
}

console.log("Se logro entrar al service")