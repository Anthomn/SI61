import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudBuscarComponent } from './solicitud-buscar.component';

describe('SolicitudBuscarComponent', () => {
  let component: SolicitudBuscarComponent;
  let fixture: ComponentFixture<SolicitudBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
