import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
arregloUsuarios: any[] = [];
 columnas_a_mostrar: String[] = ["nombre","email","genero","estado"];
constructor() { }

  ngOnInit(): void {
  }

}
