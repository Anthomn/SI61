import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaSolicitud } from 'src/app/model/respuestasolicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud-reporteingreso',
  templateUrl: './solicitud-reporteingreso.component.html',
  styleUrls: ['./solicitud-reporteingreso.component.css']
})
export class SolicitudReporteingresoComponent implements OnInit {

  lista: RespuestaSolicitud[] = [];
  dataSource: MatTableDataSource<RespuestaSolicitud> = new MatTableDataSource();
  displayedColumns: string[] = ['conductor','padre','nombrehijo' ,'monto'];
 
  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {

      this.solicitudService.buscarSolicitud().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  })
}
}
