import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {
  arreglo_pasajero: any[] = [];


  constructor() {}

cargarPasajero( objeto_pasajero: any ){
    this.arreglo_pasajero.push(objeto_pasajero);
}
  retornoPasajero(){
    return this.arreglo_pasajero;
  }
}
