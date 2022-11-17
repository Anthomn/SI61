import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/service/conductor.service';
import { Conductor } from 'src/app/model/conductor';

@Component({
  selector: 'app-conductor-buscar',
  templateUrl: './conductor-buscar.component.html',
  styleUrls: ['./conductor-buscar.component.css']
})
export class ConductorBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private conductorService: ConductorService) { }

  ngOnInit(): void {
  }
  /*
  buscar(e: any) {
    this.conductorService.buscar(e.target.value).subscribe(data=>{
      this.conductorService.setLista(data);
    });
    
    let array: Conductor[] = [];
    this.conductorService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
        else  if(element.apellido.includes(e.target.value)) {
          array.push(data[index]);
        }
        else  if (element.genero.includes(e.target.value)) {
          array.push(data[index]);
        }
        else if  (element.verificado.includes(e.target.value)) {
          array.push(data[index]);
        }
        else if  (element.direccion.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.conductorService.setLista(array);
    })
  }*/
  buscar(e: any) {
    let array: Conductor[] = [];
    this.conductorService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.conductorService.setLista(array);
    })
  }
}
