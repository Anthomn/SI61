import { Component, OnInit } from '@angular/core';
import { Padredefamilia } from 'src/app/model/padredefamilia';
import { PadredefamiliaService } from 'src/app/service/padredefamilia.service';
@Component({
  selector: 'app-padredefamilia-buscar',
  templateUrl: './padredefamilia-buscar.component.html',
  styleUrls: ['./padredefamilia-buscar.component.css']
})
export class PadredefamiliaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private padredefamiliaService: PadredefamiliaService) { }

  ngOnInit(): void {
  }
  /*
  buscar(e: any) {
    this.padredefamiliaService.buscar(e.target.value).subscribe(data=>{
      this.padredefamiliaService.setLista(data);
    });
    
    let array: Padredefamilia[] = [];
    this.padredefamiliaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.padredefamiliaService.setLista(array);
    })
    
  }*/

  buscar(e: any) {
    let array: Padredefamilia[] = [];
    this.padredefamiliaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.padredefamiliaService.setLista(array);
    })
  }

}
