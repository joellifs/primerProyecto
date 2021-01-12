import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PasajeroService {
  arreglo_pasajero: any[] = [];
  // es una llave de acceso para la base de datos
  token: string =
    'f52435b9fc3e0d76f8135df5a24f6dfab51a48dda3f8ceee0b29f30010c9baa0';

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
  //traemos un pasajero de la base de datos por un id
  verPasajero(idPasajero: number) {
    return this.http.get('https://gorest.co.in/public-api/users/' + idPasajero);
  }
  //guardar un pasajero en la base de datos
  guardarUsuario(objeto_usuario) {
    // etiqueta que identifica la consulta a la base de datos (como si fuera la etiqueta de un paquete)
    let mi_header = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
    // este objeto tiene como propiedades ciertas configuraciones que acompañan a la consulta
    let opciones_consulta = {
      headers: mi_header,
    };

    // let pasajero = {
    //   name: 'Joel',
    //   gender: 'Male',
    //   email: 'joel@joel.com',
    //   status: 'Active',
    // };

    return this.http.post(
      'https://gorest.co.in/public-api/users',
      objeto_usuario,
      opciones_consulta
    );
  }
}
