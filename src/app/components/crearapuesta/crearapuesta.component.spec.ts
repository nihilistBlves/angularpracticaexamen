import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearapuestaComponent } from './crearapuesta.component';

describe('CrearapuestaComponent', () => {
  let component: CrearapuestaComponent;
  let fixture: ComponentFixture<CrearapuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearapuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearapuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
