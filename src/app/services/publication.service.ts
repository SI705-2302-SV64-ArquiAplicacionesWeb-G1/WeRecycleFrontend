
import { Injectable } from '@angular/core';
  import { Subject } from 'rxjs';
  import { environment } from 'src/environments/environment';
  import { Publication } from '../models/publication';
  import { HttpClient } from '@angular/common/http';

  const base_url = environment.base;
  @Injectable({
    providedIn: 'root',
  })
  export class PublicationService {
    private url = `${base_url}/PublicationController`;
    private listaCambio = new Subject<Publication[]>();
    constructor(private http: HttpClient) {}

    list() {
      return this.http.get<Publication[]>(this.url);
    }

    
    insert(user: Publication) {
      return this.http.post(this.url, user);
    }

    setlist(listaNueva: Publication[]) {
      this.listaCambio.next(listaNueva);
    }

    getlist() {
      return this.listaCambio.asObservable();
    }

    delete(id: number) {
      return this.http.delete(`${this.url}/${id}`);
    }
    listId(id: number) {
      return this.http.get<Publication>(`${this.url}/${id}`);
    }

    update(u: Publication) {
      return this.http.put(this.url, u);
    }
}
