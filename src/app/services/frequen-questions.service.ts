import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrequenQuestions } from '../models/frequenQuestions';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class FrequenQuestionsService {

  private url = `${base_url}/frequentquestioncontroller`;
  private Listacambio = new Subject<FrequenQuestions[]>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<FrequenQuestions[]>(this.url);
  }

  insert(camp: FrequenQuestions) {
    return this.http.post(this.url, camp);
  }

  setList(listaNueva: FrequenQuestions[]) {
    this.Listacambio.next(listaNueva);
  }

  getList() {
    return this.Listacambio.asObservable();
  }
}
