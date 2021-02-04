import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { generate } from 'rxjs';
import { PasajeroService } from '../services/pasajero.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../services/producto.service';

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
  usuarioForms: FormGroup;
  productoForms: FormGroup;
  //FormBilder = es un constructor para el FormGroup
  constructor(
    private peliculaService: PeliculaService,
    private formBuilder: FormBuilder,
    private pasajeroService: PasajeroService,
    private _snackBar: MatSnackBar,
    private productoService: ProductoService
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
      mail: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      telefono: ['', Validators.required],
      genero: ['', Validators.required],
      fecha_de_nacimiento: ['', Validators.required],
    });
    this.usuarioForms = this.formBuilder.group({
      nombre: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      genero: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.productoForms = this.formBuilder.group({
      nombreP: ['', Validators.required],
      descriptionP: ['', Validators.required],
      imageP: '',
      precioP: ['', Validators.required],
      status: ['', Validators.required],
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
  agregarPasajero() {
    const objeto_pasajero = {
      nom: this.pasajeroForms.value['nombre'],
      ape: this.pasajeroForms.value['apellido'],
      dni: this.pasajeroForms.value['dni'],
      mail: this.pasajeroForms.value['mail'],
      edad: this.pasajeroForms.value['edad'],
      tel: this.pasajeroForms.value['telefono'],
      gen: this.pasajeroForms.value['genero'],
      fdn: this.pasajeroForms.value['fecha_de_nacimiento'],
    };
    this.pasajeroService.cargarPasajero(objeto_pasajero);
  }
  mostrarMensaje(textoMensaje: string) {
    this._snackBar.open(textoMensaje, '', {
      duration: 5000,
    });
  }

  agregarUsuario() {
    // creamos un obejetos usuario con las mimas propiedades que el objeto usuario de la base de datos
    const objeto_usuario = {
      name: this.usuarioForms.value['nombre'],
      email: this.usuarioForms.value['mail'],
      gender: this.usuarioForms.value['genero'],
      status: this.usuarioForms.value['status'],
    };

    this.pasajeroService
      .guardarUsuario(objeto_usuario)
      .subscribe((respuesta: any) => {
        console.log(respuesta);
        //Si la respuesta tiene codigo 201 ( guarado exitoso)entonces mostramos cartel
        if (respuesta.code == 201) {
          this.mostrarMensaje(
            'Usuario Agregado Exitosamente' + respuesta.data.id
          );
        } else {
          // en caso contrario se muestra que no es pobile y un mensaje de error
          this.mostrarMensaje(
            'No es posible guardar el usuario:  ' + respuesta.data[0].message
          );
        }
      });

    // resetean valores del formulario
    this.usuarioForms.reset();
  }
  agregarProducto() {
    const objeto_producto = {
      name: this.productoForms.value['nombreP'],
      description: this.productoForms.value['descriptionP'],
      image: this.productoForms.value['imageP'],
      price: this.productoForms.value['precioP'],
      status: this.productoForms.value['status'],
    };
    this.productoService
      .guardarProducto(objeto_producto)
      .subscribe((respuesta: any) => {
        console.log(respuesta);

        if (respuesta.code == 201) {
          this.mostrarMensaje(
            'Producto ' + respuesta.data.id + ' fue agregado exitosamente'
          );
        } else {
          // en caso contrario se muestra que no es pobile y un mensaje de error
          this.mostrarMensaje(
            'No es posible guardar el Producto:  ' + respuesta.data.id
          );
        }
      });

    // resetean valores del formulario
    this.productoForms.reset();
  }
}
