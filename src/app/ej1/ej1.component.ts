import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.component.html',
  styleUrls: ['./ej1.component.css'],
})
export class Ej1Component implements OnInit {
  input1: number = 0;
  input2: number = 0;
  suma: number = 0;
  clickSuma: boolean = false;
  clickMostrar: boolean = false;

  vectorDeSuma: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  funSumar(): void {
    this.suma = this.input1 + this.input2;
    this.clickSuma = true;

    // guardo el resultado (suma) en variable
    const resultado: number = this.suma;
    // agrego la variable resultado al vector
    this.vectorDeSuma.push(resultado);
  }
  //mostrar resultado
  funMostrar(): any {
    this.clickMostrar = true;
  }
}
