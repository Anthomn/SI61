import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/model/conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-conductor-listar',
  templateUrl: './conductor-listar.component.html',
  styleUrls: ['./conductor-listar.component.css']
})
export class ConductorListarComponent implements OnInit {
  lista:Conductor[] = [];
  dataSource:MatTableDataSource<Conductor> = new MatTableDataSource();
  displayedColumns:string[]=['idconductor', 'nombre', 'apellido','dni','genero','edad','tiempoconduccion','direccion','verificado' ]
  
  constructor(private cService: ConductorService) { }

  ngOnInit(): void {
    this.cService.listar().subscribe(data => {
      //this.lista =data ;
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
