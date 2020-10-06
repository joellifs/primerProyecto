import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css'],
})
export class TareaFormularioComponent implements OnInit {
  personaObjeto: any = {
    nombre: '',
    apellido: '',
    dni: 0,
    edad: 0,
    sexo: '',
    nde: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
