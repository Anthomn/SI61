import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaSolicitud } from 'src/app/model/respuestasolicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud-reporte',
  templateUrl: './solicitud-reporte.component.html',
  styleUrls: ['./solicitud-reporte.component.css']
})
export class SolicitudReporteComponent implements OnInit {

  lista: RespuestaSolicitud[] = [];
  dataSource: MatTableDataSource<RespuestaSolicitud> = new MatTableDataSource();
  displayedColumns: string[] = ['idconductor','conductor','cantidad' ,'monto'];
 
  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {

      this.solicitudService.buscarSolicitudConductor().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  })
}
}
