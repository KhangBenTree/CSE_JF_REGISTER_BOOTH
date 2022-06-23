import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const api = 'https://jfresgister-booth-api.herokuapp.com/'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(api + "account/login", data);
  }
  check_token(token: any): Observable<any> {
    return this.http.post(api + "account/check", { token: token })
  }
  register_account(data: any): Observable<any> {
    return this.http.post(api + "account/register", data)
  }
} 
