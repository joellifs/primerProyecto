import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PosteosService } from '../services/posteos.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  arregloPosteos: any[] = [];




  constructor(
    private posteosService: PosteosService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.posteosService.obtenerPosteos().subscribe((respuesta: any) => {
      this.arregloPosteos = respuesta.data; 
      console.log(this.arregloPosteos)
    });
      
    }

  }


