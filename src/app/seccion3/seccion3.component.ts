import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.component.html',
  styleUrls: ['./seccion3.component.css'],
})
export class Seccion3Component implements OnInit {
  nombre: string = '';
  email: string = '';
  telefono: string = '';

  persona: any = {
    nombrePersona: '',
    edad: 0,
    apellido: '',
    esCasado: false,
    email: '',
    telefono: '',
  };

  constructor() {}

  ngOnInit(): void {}
  cambiarTitulo(valorInputnombre: string): void {
    this.persona.nombrePersona = valorInputnombre;
  }
  cambiarEmail(valorEmail: string): void {
    this.email = valorEmail;
  }
  escribirDatos(
    valorNombre: string,
    valorEmail: string,
    valorTelefono: string
  ): void {
    this.persona.email = valorEmail;
    this.persona.nombrePersona = valorNombre;
    this.persona.telefono = valorTelefono;
  }
  mostrarDatos(): void {
    alert(
      this.persona.nombrePersona + this.persona.email + this.persona.telefono
    );
  }
}
