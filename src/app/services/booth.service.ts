import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'https://jfresgister-booth-api.herokuapp.com/'
@Injectable({
  providedIn: 'root'
})
export class BoothService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "booth/all");
  }
  remove_owner(id: number ): Observable<any> {
    return this.http.get(api + "booth/remove_owner/" +id);
  }
  delete(id: number) : Observable<any> {
    console.log(api+ "booth/del/"+id)
    return this.http.delete<any>(api+ "booth/del/"+id);
  }
  getbyId_business(id: number) : Observable<any> {
    return this.http.get<any>(api+ "booth/byIdbusiness/"+id);
  }
  getbyId(id: number) : Observable<any> {
    return this.http.get<any>(api+ "booth/byId/"+id);
  }
}
