import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoPeliculasComponent } from './paginas/listado-peliculas/listado-peliculas/listado-peliculas.component';
import { EdicionPeliculasComponent } from './paginas/edicion-peliculas/edicion-peliculas/edicion-peliculas.component';


const routes: Routes = [
  {path: "" , component: ListadoPeliculasComponent},
  { path: "editar/:id", component: EdicionPeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
