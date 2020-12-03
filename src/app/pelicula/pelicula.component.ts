import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { generate } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  // nombre: string = '';
  // genero: string = '';
  // anio: number = 0;
  // imagen: string = '';
  // vector_pelicula: any[] = [];

  //Representa el formulario del Html
  peliculaForms: FormGroup;
  pasajeroForms: FormGroup;
  //FormBilder = es un constructor para el FormGroup
  constructor(
    private peliculaService: PeliculaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //Este objeto se relaciona con el formulario del Html.
    // Dentro del objeto como propiedades van a ir cada uno de los valores y validadores de los input del formulario.
    this.peliculaForms = this.formBuilder.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      anio: ['', Validators.required],
      imagen: '',
    });            
    this.pasajeroForms = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      mail: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: ['', Validators.required],
      genero: ['', Validators.required],
      fecha_de_nacimiento: ['', Validators.required],
  });
}

  agregar() {
    const objeto_pelicula = {
      nom: this.peliculaForms.value['nombre'],
      gen: this.peliculaForms.value['genero'],
      an: this.peliculaForms.value['anio'],
      imag: this.peliculaForms.value['imagen'],
    };
    this.peliculaService.cargarPeliculas(objeto_pelicula);
  }
agregarPasajero(){
  const objeto_pasajero = {
    nom: this.pasajeroForms.value["nombre"],
    ape: this.pasajeroForms.value["apellido"],
    dni: this.pasajeroForms.value["dni"],
    mail: this.pasajeroForms.value["mail"],
    edad: this.pasajeroForms.value["edad"],
    tel: this.pasajeroForms.value["telefono"],
    gen: this.pasajeroForms.value["genero"],
    fdn: this.pasajeroForms.value["fecha_de_nacimiento"],
    }
    console.log(objeto_pasajero)

}

}
