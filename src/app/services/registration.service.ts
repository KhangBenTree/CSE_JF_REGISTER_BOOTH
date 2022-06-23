import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'https://jfresgister-booth-api.herokuapp.com/'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "register/all");
  }
  delete(id: number) : Observable<any> {
    return this.http.delete<any>(api+ "register/delete/"+id);
  }
  getbyId_booth(id: number) : Observable<any> {
    return this.http.get<any>(api+ "register/byIdbooth/"+id);
  }
  getbyId_business(id: number) : Observable<any> {
    return this.http.get<any>(api+ "register/byIdbusiness/"+id);
  }
}
