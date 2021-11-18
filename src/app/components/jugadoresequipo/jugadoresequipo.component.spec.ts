import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresequipoComponent } from './jugadoresequipo.component';

describe('JugadoresequipoComponent', () => {
  let component: JugadoresequipoComponent;
  let fixture: ComponentFixture<JugadoresequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadoresequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
