import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesBuscarComponent } from './viajes-buscar.component';

describe('ViajesBuscarComponent', () => {
  let component: ViajesBuscarComponent;
  let fixture: ComponentFixture<ViajesBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
