import { Component, OnInit, Input } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-vista-pelicula',
  templateUrl: './vista-pelicula.component.html',
  styleUrls: ['./vista-pelicula.component.css'],
})
export class VistaPeliculaComponent implements OnInit {
  /* @Input() nombre_entrada: string;
  @Input() genero_entrada: string;
  @Input() anio_entrada: string;
  @Input() imagen_entrada: string;
 */

 vectorPelicula: any[] = [];
  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.vectorPelicula = this.peliculaService.obtenerPeliculas()

  }
}
