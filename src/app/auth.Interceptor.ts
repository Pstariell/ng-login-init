import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
//import {AuthService} from './auth.service'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    myauth
  constructor() { 
    
  }

  intercept(req, next) {
    var token = localStorage.getItem('token');
    
    var authRequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + token)
    });
      console.log(authRequest)
      return next.handle(authRequest)
  }



}
