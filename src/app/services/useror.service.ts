import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Useror } from '../models/useror';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserorService {

  private url = `${base_url}/users`;
  private listaCambio = new Subject<Useror[]>();
  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Useror[]>(this.url);
  }
  insert(user: Useror) {
    return this.http.post(this.url, user);
  }

  setlist(listaNueva: Useror[]) {
    console.log("Lista actualizada en el servicio:", listaNueva);

    this.listaCambio.next(listaNueva);
    
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
  
  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
    return this.http.get<Useror>(`${this.url}/${id}`);
    }

    update(u: Useror) {
      return this.http.put(this.url, u);
      }

      getLastCreatedUser(): Observable<Useror | null> {
        return this.listaCambio.pipe(
          map(users => {
            const lastUser = users.length > 0 ? users[users.length - 1] : null;
            console.log("Último usuario emitido:", lastUser);
            return lastUser;
          })
        );
      
}
}
