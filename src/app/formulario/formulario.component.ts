import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  telefono: number = 0;
  aparece: boolean = false;
  arregloTarjeta: any[] = [];
  arregloNumeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  arregloNuevo: string[] = ['Joel', 'Joaquin', 'Isa'];
  constructor() {}

  ngOnInit(): void {}
  agregar() {
    this.aparece = true;
    // creamos una tarjeta para guardar un dato del formulario
    const tarjeta = {
      nom: this.nombre,
      ape: this.apellido,
      tel: this.telefono,
    };
    console.log(tarjeta);
    //agregamos la tarjeta que acabamos de crear al arreglo
    this.arregloTarjeta.push(tarjeta);
    console.log(this.arregloTarjeta);
  }
}
