import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  arregloProductos: any[] = [];
  busqueda: number = 0;

  constructor(
    private productoService: ProductoService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((respuesta: any) => {
      this.arregloProductos = respuesta.data;
    });
  }
  mostrarMensaje(textoMensaje: string) {
    this._snackBar.open(textoMensaje, '', {
      duration: 5000,
    });
  }

  buscarProductos() {
    this.productoService
      .verProductos(this.busqueda)
      .subscribe((respuesta: any) => {
        this.mostrarMensaje('Nombre del producto es:  ' + respuesta.data.name);
      });
  } //Fin buscar producto

  eliminarProductos() {
    this.productoService
      .eliminarProductos(this.busqueda)
      .subscribe((respuesta: any) => {
        if (respuesta.code == 204) {
          this.mostrarMensaje(
            'El Producto ' + this.busqueda + ' fue eliminado'
          );
        } else {
          this.mostrarMensaje('Producto no pudo ser eliminado');
        }
      });
  } //Fin de eliminar producto.
}
