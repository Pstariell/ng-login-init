import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@Injectable()
export class AuthService {
    
  constructor(private http: HttpClient) { 
  }

    get IsAuth() {
        return !!localStorage.getItem('token');
    } 
      
    Registra(credentials) {

        this.http.post<any>('http://localhost:1410/api/Account', credentials).subscribe( res=> this.Authenticate(res))
    }

    Login(credentials) {
        return this.http.post<any>('http://localhost:1410/api/Account/Login', credentials);
    }
    
    Authenticate(res) {
        localStorage.setItem('token', res);
    }

    Logoff() {
        localStorage.removeItem('token');
    }


}
