import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Pelicula } from 'src/app/modelos/pelicula.modelo';


@Component({
  selector: 'app-edicion-peliculas',
  templateUrl: './edicion-peliculas.component.html',
  styleUrls: ['./edicion-peliculas.component.css']
})
export class EdicionPeliculasComponent {
  pelicula!: Pelicula;
  id!: number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    // this.id = "";
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.http.get<Pelicula[]>("http://localhost:3001/movies?id="+this.id).subscribe((datos: Pelicula[]) => {
        this.pelicula = datos[0]; //Porque datos saca un [{...}]
        console.log("Datos de pelicula (ID="+this.id+"): ",this.pelicula);
    });
  }

}
