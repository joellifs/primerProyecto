import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { VistaPeliculaComponent } from './vista-pelicula/vista-pelicula.component';
import { VistaPasajeroComponent } from './vista-pasajero/vista-pasajero.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculaComponent,
  },
  {
    path: 'seccion1',
    component: Seccion1Component,
  },
  {
    path: 's2',
    component: Seccion2Component,
  },
  {
    path: 'vistapelicula',
    component: VistaPeliculaComponent,
  },
  {
    path: 'vistapasajero',
    component: VistaPasajeroComponent,
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
