import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Useror } from '../models/useror';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserorService {

  private url = `${base_url}/users`;
  private listaCambio = new Subject<Useror[]>();
  constructor(private http:HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Useror[]>(this.url,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(user: Useror) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, user, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setlist(listaNueva: Useror[]) {
    console.log("Lista actualizada en el servicio:", listaNueva);

    this.listaCambio.next(listaNueva);
    
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
  
  delete(id: number){
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Useror>(`${this.url}/${id}`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
    }

    update(u: Useror) {
      let token = sessionStorage.getItem('token');

      return this.http.put(this.url, u,{
        headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
      });
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
