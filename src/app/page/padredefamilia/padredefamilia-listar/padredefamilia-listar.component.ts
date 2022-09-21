import { Component, OnInit } from '@angular/core';
import { Padredefamilia } from 'src/app/model/padredefamilia';
import {MatTableDataSource} from '@angular/material/table'
import { PadredefamiliaService } from 'src/app/service/padredefamilia.service';

@Component({
  selector: 'app-padredefamilia-listar',
  templateUrl: './padredefamilia-listar.component.html',
  styleUrls: ['./padredefamilia-listar.component.css']
})
export class PadredefamiliaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Padredefamilia> = new MatTableDataSource();
  displayedColumns:string[]=['idpadre', 'nombre', 'apellido','edad','email','telefono','direccion','acciones'];
  constructor(private padreService: PadredefamiliaService) { }

  ngOnInit(): void {
    this.padreService.listar().subscribe(data => {
      //this.lista =data ;
      this.dataSource=new MatTableDataSource(data);
    })
    this.padreService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
