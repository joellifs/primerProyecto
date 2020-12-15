import { Component, OnInit } from '@angular/core';
import { PasajeroService } from '../services/pasajero.service';

@Component({
  selector: 'app-vista-pasajero',
  templateUrl: './vista-pasajero.component.html',
  styleUrls: ['./vista-pasajero.component.css'],
})
export class VistaPasajeroComponent implements OnInit {
  vectorPasajero: any[] = [];
  constructor(private pasajeroService: PasajeroService) {}

  ngOnInit(): void {
    this.vectorPasajero = this.pasajeroService.arreglo_pasajero;
  }
}
