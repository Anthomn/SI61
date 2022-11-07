import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Solicitud } from 'src/app/model/solicitud';
import { SolicitudComponent } from '../solicitud.component';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { MatDialog } from '@angular/material/dialog';
import { SolicitarDialogoComponent } from './solicitar-dialogo/solicitar-dialogo.component';

@Component({
  selector: 'app-solicitud-listar',
  templateUrl: './solicitud-listar.component.html',
  styleUrls: ['./solicitud-listar.component.css']
})

export class SolicitudListarComponent implements OnInit {
    lista: Solicitud[] = [];
    dataSource: MatTableDataSource<Solicitud> = new MatTableDataSource();
    displayedColumns: string[] = ['idsolicitud','fecha', 'descripcion','precio' ,'padredefamilia','conductor', 'nombrehijo','edadhijo','direccioncasa','direccioncolegio', 'estado', 'acciones'];
    //'fecha','fechainicio', 'fechafin', //'padredefamilia'
    private idMayor: number = 0;
  
    constructor(private solicitudService: SolicitudService, private dialog: MatDialog) { }
  
    ngOnInit(): void {
      this.solicitudService.listar().subscribe(data => {
        this.lista = data;
        this.dataSource = new MatTableDataSource(data);
      });
  
      this.solicitudService.getLista().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
  
      });
  
      this.solicitudService.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
    }
    confirmar(id: number) {
      this.idMayor = id;
      this.dialog.open(SolicitarDialogoComponent);
    }
    eliminar(id: number) {
      this.solicitudService.eliminar(id).subscribe(() => {
        this.solicitudService.listar().subscribe(data => {
          this.solicitudService.setLista(data);/* se ejecuta la línea 27 */
        });
      });
    }
  }
  
