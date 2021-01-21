import {
  Component,
  OnInit,
  ɵCodegenComponentFactoryResolver,
} from '@angular/core';
import { PasajeroService } from '../services/pasajero.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  arregloUsuarios: any[] = [];
  columnas_a_mostrar: String[] = ['id', 'nombre', 'email', 'genero', 'estado'];
  busqueda: number = 0;
  // creamos una variable del tipo pasajero para poder hacer uso de las funciones del servicio
  constructor(
    private pasajeroService: PasajeroService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //llamamos a la funcion obtener pasajeros y nos subscribimos a la respuesta
    //esto quiere decir que cuando llegue la respuesta se van ejecutar todas las lineas que aparecene despues de las flechas

    this.pasajeroService.obtenerPasajeros().subscribe((respuesta: any) => {
      this.arregloUsuarios = respuesta.data;
    });
  }
  mostrarMensaje(textoMensaje: string) {
    this._snackBar.open(textoMensaje, '', {
      duration: 5000,
    });
  }
  buscarUsuario() {
    this.pasajeroService
      .verPasajero(this.busqueda)
      .subscribe((respuesta: any) => {
        this.mostrarMensaje('Nombre del pasajero es:  ' + respuesta.data.name);
      });
  }

  eliminarUsuario() {
    this.pasajeroService
      .elimnarUsuario(this.busqueda)
      .subscribe((respuesta: any) => {
        if (respuesta.code == 204) {
          this.mostrarMensaje('El Usuario ' + this.busqueda + ' fue eliminado');
        } else {
          this.mostrarMensaje('Usuario no pudo ser eliminado');
        }
      });
  }
}
