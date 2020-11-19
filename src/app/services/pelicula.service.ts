import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  //Creamos una variable para guardar las peliculas
  arreglo_pelicula: any[] = [];

  constructor() {}
  // recibe un objeto (pelicula) y lo guarda en el arreglo
  cargarPeliculas(nuevo_objetoPeli: any) {
    //guardar obejto en vector
    this.arreglo_pelicula.push(nuevo_objetoPeli);
  }
  obtenerPeliculas() {
    return this.arreglo_pelicula;
  }
}
