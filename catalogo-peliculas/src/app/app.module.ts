import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPeliculasComponent } from './paginas/listado-peliculas/listado-peliculas/listado-peliculas.component';
import { EdicionPeliculasComponent } from './paginas/edicion-peliculas/edicion-peliculas/edicion-peliculas.component';
import { FormularioEdicionComponent } from './formularios/formulario-edicion/formulario-edicion.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    EdicionPeliculasComponent,
    FormularioEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    CommonModule //Para que reconozca la directiva ngIf en listado-peliculas.component.html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
