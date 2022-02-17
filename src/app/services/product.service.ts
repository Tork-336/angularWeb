import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const serverURL = "http://localhost:8080/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllproducts(all, page, size): Observable<any> {
    return this.http.get(serverURL, {
      params:{
        all: all,
        page: page, 
        size: size}
      });
  }

  postProduct(product): Observable<any> {
    return this.http.post(serverURL, {product});
  }
}
