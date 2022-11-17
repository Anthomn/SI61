import { Estado } from './../../../model/estado';
import { EstadoService } from 'src/app/service/estado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-buscar',
  templateUrl: './estado-buscar.component.html',
  styleUrls: ['./estado-buscar.component.css']
})
export class EstadoBuscarComponent implements OnInit {
  extoBuscar: string = ""
  constructor(private estadoService: EstadoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Estado[] = [];
    this.estadoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.ubicacion.distrito.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.estadoService.setLista(array);
    })
  }
}
