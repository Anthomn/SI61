import { Solicitud } from './../../../model/solicitud';
import { SolicitudService } from './../../../service/solicitud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-buscar',
  templateUrl: './solicitud-buscar.component.html',
  styleUrls: ['./solicitud-buscar.component.css']
})
export class SolicitudBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private solicitudServie:SolicitudService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Solicitud[] = [];
    this.solicitudServie.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombrehijo.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.solicitudServie.setLista(array);
    })
  }
}
