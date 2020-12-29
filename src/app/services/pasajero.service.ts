import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PasajeroService {
  arreglo_pasajero: any[] = [];

  constructor(private http: HttpClient) {}

  cargarPasajero(objeto_pasajero: any) {
    this.arreglo_pasajero.push(objeto_pasajero);
  }
  retornoPasajero() {
    return this.arreglo_pasajero;
  }
  // traemos pasajeros de una base de datos abierta
  obtenerPasajeros() {
    return this.http.get('https://gorest.co.in/public-api/users');
  }
}
