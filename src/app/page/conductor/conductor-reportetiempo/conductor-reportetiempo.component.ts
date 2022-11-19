import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Conductor } from 'src/app/model/conductor';
import { ConductorService } from 'src/app/service/conductor.service';

@Component({
  selector: 'app-conductor-reportetiempo',
  templateUrl: './conductor-reportetiempo.component.html',
  styleUrls: ['./conductor-reportetiempo.component.css']
})
export class ConductorReportetiempoComponent implements OnInit {
  dataSource:MatTableDataSource<Conductor>=new MatTableDataSource();
  displayedColumns:string[]=['idconductor', 'nombre', 'apellido','dni','genero','edad','tiempoconduccion','direccion','verificado']
  constructor(private cService:ConductorService) { }

  ngOnInit(): void {
    this.cService.reportetiempo().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
