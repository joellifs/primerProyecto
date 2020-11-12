import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  //Creamos una variable para guardar las peliculas
  arreglo_pelicula: any[] = [];

  constructor() {}
  cargarPeliculas(vector_dePelis: any[]) {
    this.arreglo_pelicula = vector_dePelis;
    console.log('vector Pelicula desde el Servicio' + this.arreglo_pelicula);
  }
  obtenerPeliculas(){
    return this.arreglo_pelicula;
  }
}
