import { Component, OnInit } from '@angular/core';
import { PasajeroService } from '../services/pasajero.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  arregloUsuarios: any[] = [];
  columnas_a_mostrar: String[] = ['nombre', 'email', 'genero', 'estado'];
  // creamos una variable del tipo pasajero para poder hacer uso de las funciones del servicio
  constructor(private pasajeroService: PasajeroService) {}

  ngOnInit(): void {
    //llamamos a la funcion obtener pasajeros y nos subscribimos a la respuesta
    //esto quiere decir que cuando llegue la respuesta se van ejecutar todas las lineas que aparecene despues de las flechas

    this.pasajeroService.obtenerPasajeros().subscribe((respuesta: any) => {
      this.arregloUsuarios = respuesta.data;
    });
  }
}
