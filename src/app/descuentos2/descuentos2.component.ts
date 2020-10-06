import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descuentos2',
  templateUrl: './descuentos2.component.html',
  styleUrls: ['./descuentos2.component.css'],
})
export class Descuentos2Component implements OnInit {
  // Aviso al ts que va recibir informacion de otro componente
  @Input() desc1: number;
  @Input() desc2: number;
  @Input() desc3: number;
  @Input() descEfectivo: number;
  @Input() descTarjeta: number;
  @Input() usuarioNuevo: string;

  precioInicial: number = 0;
  formaPago: string = '';
  descuentoPago: number = 0;
  descuentoAplicado: number = 0;
  totalApagar: number = 0;
  usuario2: string = '';
  constructor() {}

  ngOnInit(): void {
    this.usuario2 = this.usuarioNuevo;
  }

  funCobrar(): void {
    // Primero resetiamos todas las variables para seguir calculando sin actulizar
    // llama a la funcion dentro de la funcion
    this.funReset();

    if (this.precioInicial >= 500 && this.precioInicial <= 999) {
      this.totalApagar = this.precioInicial * ((100 - this.desc1) / 100);
      this.descuentoPago = this.desc1;
    } else if (this.precioInicial >= 1000 && this.precioInicial <= 1499) {
      this.totalApagar = this.precioInicial * ((100 - this.desc2) / 100);
      this.descuentoPago = this.desc2;
    } else if (this.precioInicial >= 1500) {
      this.totalApagar = this.precioInicial * ((100 - this.desc3) / 100);
      this.descuentoPago = this.desc3;
    }
    if (this.formaPago == 'efectivo') {
      this.totalApagar = this.totalApagar * ((100 - this.descEfectivo) / 100);
      this.descuentoPago = this.descuentoPago + this.descEfectivo;
    } else if (this.formaPago == 'tarjeta') {
      this.totalApagar = this.totalApagar * ((100 - this.descTarjeta) / 100);
      this.descuentoPago = this.descuentoPago + this.descTarjeta;
    }
    this.descuentoAplicado = this.descuentoPago;
  }
  funReset(): void {
    this.descuentoPago = 0;
    this.descuentoAplicado = 0;
  }
}
