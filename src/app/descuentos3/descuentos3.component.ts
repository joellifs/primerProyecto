import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descuentos3',
  templateUrl: './descuentos3.component.html',
  styleUrls: ['./descuentos3.component.css'],
})
export class Descuentos3Component implements OnInit {
  @Input() usuarioIngreso: string;

  descuento1: number = 0;
  descuento2: number = 0;
  descuento3: number = 0;
  descuentoEfectivo: number = 0;
  descuentoTarjeta: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
