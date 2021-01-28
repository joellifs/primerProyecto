import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  constructor(private http: HttpClient) { }

obtenerProductos() {
  return this.http.get('https://gorest.co.in/public-api/products');
}
}