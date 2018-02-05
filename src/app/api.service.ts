import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {


  constructor(private http: HttpClient
  ) { 

  }

GetValue() {
return   this.http.get('http://localhost:1410/api/values')
}

}
