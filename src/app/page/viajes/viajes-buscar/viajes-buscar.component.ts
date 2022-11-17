import { Viajes } from './../../../model/viajes';
import { ViajesService } from './../../../service/viajes.service';
import { PadredefamiliaService } from './../../../service/padredefamilia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes-buscar',
  templateUrl: './viajes-buscar.component.html',
  styleUrls: ['./viajes-buscar.component.css']
})
export class ViajesBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private pService:ViajesService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Viajes[] = [];
    this.pService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.vehiculo.placa.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pService.setLista(array);
    })
  }
}
