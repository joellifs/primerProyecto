import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  nombre: string = '';
  genero: string = '';
  anio: number = 0;
  imagen: string = '';
  // vector_pelicula: any[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {}

  agregar() {
    const objeto_pelicula = {
      nom: this.nombre,
      gen: this.genero,
      an: this.anio,
      imag: this.imagen,
    };
    this.peliculaService.cargarPeliculas(objeto_pelicula);
  }
}
