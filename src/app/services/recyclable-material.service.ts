import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecyclableMaterial } from '../models/recyclable-material';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class RecyclableMaterialService {
  private url = `${base_url}/RecyclableMaterialController`;
  private listaCambio = new Subject<RecyclableMaterial[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<RecyclableMaterial[]>(this.url);
  }
  insert(recyclableMaterial: RecyclableMaterial) {
    return this.http.post(this.url, recyclableMaterial);
  }

  setlist(listaNueva: RecyclableMaterial[]) {
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
}

console.log("Se logro entrar al service")