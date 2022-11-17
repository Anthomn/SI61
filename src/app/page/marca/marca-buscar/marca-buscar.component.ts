import { Marca } from './../../../model/marca';
import { MarcaService } from './../../../service/marca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca-buscar',
  templateUrl: './marca-buscar.component.html',
  styleUrls: ['./marca-buscar.component.css']
})
export class MarcaBuscarComponent implements OnInit {
  textoBuscar: string = ""

  constructor(private marcaS:MarcaService) { }

  ngOnInit(): void {

  }

  buscar(e: any) {
    let array: Marca[] = [];
    this.marcaS.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombremarca.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.marcaS.setLista(array);
    })
  }

}
