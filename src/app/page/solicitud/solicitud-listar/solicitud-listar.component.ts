import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Solicitud } from 'src/app/model/solicitud';
import { SolicitudComponent } from '../solicitud.component';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud-listar',
  templateUrl: './solicitud-listar.component.html',
  styleUrls: ['./solicitud-listar.component.css']
})
export class SolicitudListarComponent implements OnInit {
  lista:Solicitud[] = [];
  dataSource:MatTableDataSource<Solicitud>=new MatTableDataSource();
  
  displayedColumns:string[]=['idsolicitud','precio','duracion','fecha','descripcion','vehiculo','conductor','padredefamilia']

  constructor(private SolicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.SolicitudService.listar().subscribe(data=> {
      this.dataSource=new MatTableDataSource(data);

    })
  }

}
