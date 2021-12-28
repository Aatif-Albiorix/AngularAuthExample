import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() { 
    let headers = new Headers();
    let token = localStorage.getItem('token');

    headers.append('Authorization', 'Bearer ' + token);

    let option = new RequestOptions({ headers: headers }); 
    
    return this.http.get('/api/orders', option)
      .map(response => response.json());

          // Use  with authHttp
      // return this.authHttp.get('/api/orders')
      // .map(response => response.json());
  }
}
