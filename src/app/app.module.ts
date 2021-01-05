import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion3Component } from './seccion3/seccion3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioPersonalComponent } from './formulario-personal/formulario-personal.component';
import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component';
import { Ej1Component } from './ej1/ej1.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { Descuentos2Component } from './descuentos2/descuentos2.component';
import { Descuentos3Component } from './descuentos3/descuentos3.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaComponent } from './vista/vista.component';
import { TareaComponent } from './tarea/tarea.component';
//Libreria importada flexLayout https://github.com/angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { PeliculaComponent } from './pelicula/pelicula.component';

import { VistaPeliculaComponent } from './vista-pelicula/vista-pelicula.component';
// modulos para angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { VistaPasajeroComponent } from './vista-pasajero/vista-pasajero.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    FormularioPersonalComponent,
    TareaFormularioComponent,
    Ej1Component,
    DescuentosComponent,
    Descuentos2Component,
    Descuentos3Component,
    FormularioComponent,
    VistaComponent,
    TareaComponent,
    PeliculaComponent,
    VistaPeliculaComponent,
    VistaPasajeroComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    // { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
