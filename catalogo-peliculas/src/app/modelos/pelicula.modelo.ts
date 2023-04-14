//Modelo de la clase Pelicula

export class Pelicula {
  id: number;
  name: string;
  poster: string;
  director: string;
  year: number;

  constructor(id: number, name: string, director: string, poster: string, year: number) {
    this.id = id;
    this.name = name;
    this.director = director;
    this.poster = poster;
    this.year = year;
  }

  //Métodos de la clase pelicula:
  // ...
 }
