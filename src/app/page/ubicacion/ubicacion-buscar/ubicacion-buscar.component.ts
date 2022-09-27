import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/service/ubicacion.service';


@Component({
  selector: 'app-ubicacion-buscar',
  templateUrl: './ubicacion-buscar.component.html',
  styleUrls: ['./ubicacion-buscar.component.css']
})
export class UbicacionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private ubicacionservice: UbicacionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Ubicacion[] = [];
    this.ubicacionservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.distrito.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.ubicacionservice.setLista(array);
    })
  }


}
