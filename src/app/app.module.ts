import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion3Component } from './seccion3/seccion3.component';
import { FormsModule } from '@angular/forms';
import { FormularioPersonalComponent } from './formulario-personal/formulario-personal.component';
import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component';
import { Ej1Component } from './ej1/ej1.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { Descuentos2Component } from './descuentos2/descuentos2.component';
import { Descuentos3Component } from './descuentos3/descuentos3.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
