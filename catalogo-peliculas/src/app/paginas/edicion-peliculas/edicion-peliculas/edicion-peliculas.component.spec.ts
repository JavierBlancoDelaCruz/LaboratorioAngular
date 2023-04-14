import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionPeliculasComponent } from './edicion-peliculas.component';

describe('EdicionPeliculasComponent', () => {
  let component: EdicionPeliculasComponent;
  let fixture: ComponentFixture<EdicionPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
