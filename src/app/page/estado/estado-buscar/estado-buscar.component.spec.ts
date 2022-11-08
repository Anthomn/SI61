import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoBuscarComponent } from './estado-buscar.component';

describe('SolicitudBuscarComponent', () => {
  let component: EstadoBuscarComponent;
  let fixture: ComponentFixture<EstadoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});