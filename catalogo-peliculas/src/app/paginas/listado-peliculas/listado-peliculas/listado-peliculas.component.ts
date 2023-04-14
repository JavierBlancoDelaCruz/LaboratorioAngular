import { Component, Input } from '@angular/core';

import { Pelicula } from 'src/app/modelos/pelicula.modelo';
import { ApiPeliculasService } from 'src/app/servicios/api-peliculas.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {
  @Input() peliculas!: Pelicula[];

  constructor(private servicioApiPeliculas: ApiPeliculasService, private router: Router) {
    // this.peliculas = [];
  }

  cargarListado = () => {
    this.servicioApiPeliculas.obtenerPeliculas().subscribe({ //Suscripción al servicio obtenerPeliculas() para poder usarlo en este componente
      next: (peliculas) => (this.peliculas = peliculas), //Esto rellenará la lista peliculas con los datos del servidor
      error: (error) => (error.message)
    });
  }

  ngOnInit(): void {
    this.cargarListado(); //Cargará el listado de películas al iniciar la página.
  }

  edicionPelicula(pelicula: Pelicula) {
    this.router.navigate(["/editar", pelicula.id]);
  }
}
