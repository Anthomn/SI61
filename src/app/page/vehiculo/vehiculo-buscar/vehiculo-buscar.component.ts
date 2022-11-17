import { Vehiculo } from './../../../model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo-buscar',
  templateUrl: './vehiculo-buscar.component.html',
  styleUrls: ['./vehiculo-buscar.component.css']
})
export class VehiculoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Vehiculo[] = [];
    this.vehiculoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.placa.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.vehiculoService.setLista(array);
    })
  }
}
