import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css'],
})
export class DescuentosComponent implements OnInit {
  usuario: string = '';
  contrasenia: string = '';
  usuario_guardado: string = 'joel';
  contrasenia_guardado: string = 'joel';
  validar: boolean = false;
  mensaje: string = 'Credenciales Correctas!';
  constructor() {}

  ngOnInit(): void {}

  funIngresar(): void {
    if (this.usuario == '') {
      alert('Complete el usuario');
    } else if (this.contrasenia == '') {
      alert('Complete la contrasenia');
    } else if (
      this.usuario != this.usuario_guardado ||
      this.contrasenia != this.contrasenia_guardado
    ) {
      alert('Usuario o contraseña no es valido');
    } else if (
      this.usuario == this.usuario_guardado &&
      this.contrasenia == this.contrasenia_guardado
    ) {
      this.validar = true;
    }
  }
}
