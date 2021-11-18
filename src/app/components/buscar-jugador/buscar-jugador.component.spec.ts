import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarJugadorComponent } from './buscar-jugador.component';

describe('BuscarJugadorComponent', () => {
  let component: BuscarJugadorComponent;
  let fixture: ComponentFixture<BuscarJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
