import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Conductor } from 'src/app/model/conductor';
import { ConductorService } from 'src/app/service/conductor.service';

@Component({
  selector: 'app-conductor-reporteverificados',
  templateUrl: './conductor-reporteverificados.component.html',
  styleUrls: ['./conductor-reporteverificados.component.css']
})
export class ConductorReporteverificadosComponent implements OnInit {
  dataSource:MatTableDataSource<Conductor>=new MatTableDataSource();
  displayedColumns:string[]=['idconductor', 'nombre', 'apellido','dni','genero','edad','tiempoconduccion','direccion','verificado']
  constructor(private cService:ConductorService) { }

  ngOnInit(): void {
    this.cService.reporteverificado().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
