import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { Seccion1Component } from './seccion1/seccion1.component';

const routes: Routes = [
  {
    path:"", 
    component:PeliculaComponent
 
  },
  {
    path:"seccion1",
    component:Seccion1Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
