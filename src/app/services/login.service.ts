import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const serverURL = "http://localhost:8080/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  postLogin(LoginForm): Observable<any> {
    return this.httpClient.post(serverURL, LoginForm);
  }
}
