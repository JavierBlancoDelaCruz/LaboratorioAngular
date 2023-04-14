import { Injectable } from '@angular/core';

//Moedlo que se va a usar
import { Pelicula } from '../modelos/pelicula.modelo';

//Para usar servidor
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {

  constructor(private http: HttpClient) { } //Inyección de dependencias del modulo HttpClient

  obtenerPeliculas(): Observable<Pelicula[]> { //Se tendrán que suscribir a este servicio los componentes que lo quieran usar, en este caso se deberá suscribir listado-peliculas.component.ts
    return this.http.get<Pelicula[]>("http://localhost:3001/movies");
  }
}
