import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'https://jfresgister-booth-api.herokuapp.com/'
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "business/all");
  }
  delete(id: number) : Observable<any> {
    return this.http.delete<any>(api+ "business/del/"+id);
  }
  maxid() : Observable<any> {
    return this.http.get<any>(api+ "business/maxid");
  }
  getbyId(id: number): Observable<any> {
    console.log(api+ "business/byId/"+id)
    return this.http.get<any>(api+ "business/byId/"+id);
  }
}
