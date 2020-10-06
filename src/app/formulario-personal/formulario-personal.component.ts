import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-personal',
  templateUrl: './formulario-personal.component.html',
  styleUrls: ['./formulario-personal.component.css'],
})
export class FormularioPersonalComponent implements OnInit {
  // obejeto para guardar los datos de una persona
  personaDatos: any = {
    nombre: '',
    apellido: '',
    dni: 0,
    edad: 0,
    sexo: '',
    nde: '',
  };

  //creamos un arreglo para guardar objetos-personas adentro.
  arregloPersonas: any[] = [];

  enviado: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  // ---------------------------------------------------------
  enviarDatos(): void {
    // Crea un nuevo registro
    // let variable:number=0;
    const nuevo_registro: any = {
      nombre: this.personaDatos.nombre,
      apellido: this.personaDatos.apellido,
      dni: this.personaDatos.dni,
      edad: this.personaDatos.edad,
      sexo: this.personaDatos.sexo,
      nde: this.personaDatos.nde,
    };
    this.enviado = true;
    //Añade un nuevo elemento(una persona) al arreglo
    this.arregloPersonas.push(nuevo_registro);
    // Llamo a la funicion para limpiar el formulario.
    this.limpiarFormulario();
  }
  // ---------------------------------------------------------
  //Defino funcion para limpiar formulario

  limpiarFormulario(): void {
    this.personaDatos.nombre = '';
    this.personaDatos.apellido = '';
    this.personaDatos.dni = 0;
    this.personaDatos.edad = 0;
    this.personaDatos.sexo = '';
    this.personaDatos.nde = '';
  }
}
