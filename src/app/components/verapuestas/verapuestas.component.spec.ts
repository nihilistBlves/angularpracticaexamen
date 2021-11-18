import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerapuestasComponent } from './verapuestas.component';

describe('VerapuestasComponent', () => {
  let component: VerapuestasComponent;
  let fixture: ComponentFixture<VerapuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerapuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerapuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
