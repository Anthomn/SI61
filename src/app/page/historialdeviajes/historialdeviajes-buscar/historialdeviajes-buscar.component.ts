import { Historialdeviajes } from './../../../model/historialdeviajes';
import { HistorialdeviajesService } from 'src/app/service/historialdeviajes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialdeviajes-buscar',
  templateUrl: './historialdeviajes-buscar.component.html',
  styleUrls: ['./historialdeviajes-buscar.component.css']
})
export class HistorialdeviajesBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private historialService: HistorialdeviajesService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Historialdeviajes[] = [];
    this.historialService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.viaje.vehiculo.placa.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.historialService.setLista(array);
    })
  }
}
