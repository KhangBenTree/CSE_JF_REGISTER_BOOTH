import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'https://jfresgister-booth-api.herokuapp.com/'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "admin/all");
  }
  delete(id: number) : Observable<any> {
    console.log(api+ "admin/del/"+id)
    return this.http.delete<any>(api+ "admin/del/"+id);
  }
}
