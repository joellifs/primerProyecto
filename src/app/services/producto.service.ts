import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  token: string =
    'f52435b9fc3e0d76f8135df5a24f6dfab51a48dda3f8ceee0b29f30010c9baa0';
  constructor(private http: HttpClient) {}

  obtenerProductos() {
    return this.http.get('https://gorest.co.in/public-api/products');
  }
  verProductos(idProducto: number) {
    return this.http.get(
      'https://gorest.co.in/public-api/products/' + idProducto
    );
  }

  eliminarProductos(idProducto) {
    let mi_header = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });

    let opciones_consulta = {
      headers: mi_header,
    };

    return this.http.delete(
      'https://gorest.co.in/public-api/products/' + idProducto,

      opciones_consulta
    );
  }
  guardarProducto(objeto_producto) {
    let mi_header = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });

    let opciones_consulta = {
      headers: mi_header,
    };

    return this.http.post(
      'https://gorest.co.in/public-api/products',
      objeto_producto,
      opciones_consulta
    );
  }
}
