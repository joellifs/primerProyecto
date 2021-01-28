import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
arregloProductos: any[] = [];
  constructor(private  productoService: ProductoService) { }

  ngOnInit(): void {
  this.productoService
  .obtenerProductos()
  .subscribe((respuesta:any) => {
    this.arregloProductos = respuesta.data;
 console.log(this.arregloProductos);
  }

  );
  
  
  }

}
