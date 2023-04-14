import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/modelos/pelicula.modelo';


@Component({
  selector: 'app-formulario-edicion',
  templateUrl: './formulario-edicion.component.html',
  styleUrls: ['./formulario-edicion.component.css']
})
export class FormularioEdicionComponent {
  pelicula!: Pelicula;
  id!: number;
  formPelicula!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {
    this.route.params.subscribe(params => { //También puede hacerse con this.route.paramMap.subscribe(params => { this.id = Number(params.get('id'));
      this.id = params["id"];
    });

    this.formPelicula = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      poster: ["", [Validators.required, Validators.pattern("https?://.+")]],
      director: ["", [Validators.required, Validators.minLength(3)]],
      year: ["", [Validators.required, Validators.min(1900), Validators.max(2100)]]
    });
  }



  onSubmit() {
    this.pelicula = this.formPelicula.value;

    this.http.put<Pelicula>("http://localhost:3001/movies/"+this.id , this.pelicula).subscribe(() => {
      alert("¡Película '"+this.pelicula.name+"' actualizada con éxito!");
      this.router.navigate(['/']);
    });
  }
}
