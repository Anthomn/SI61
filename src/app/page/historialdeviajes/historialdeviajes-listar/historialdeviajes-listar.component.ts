import { HistorialdeviajesDialogoComponent } from './historialdeviajes-dialogo/historialdeviajes-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Historialdeviajes } from 'src/app/model/historialdeviajes';
import { HistorialdeviajesService } from 'src/app/service/historialdeviajes.service';

@Component({
  selector: 'app-historialdeviajes-listar',
  templateUrl: './historialdeviajes-listar.component.html',
  styleUrls: ['./historialdeviajes-listar.component.css']
})
export class HistorialdeviajesListarComponent implements OnInit {
  lista:Historialdeviajes[] = [];
  dataSource:MatTableDataSource<Historialdeviajes>=new MatTableDataSource();
  displayedColumns:string[]=['idhistorial', 'observaciones', 'viajes', 'placa', 'acciones']
  private idMayor: number = 0;

  constructor(private historialService: HistorialdeviajesService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.historialService.listar().subscribe(data=> {
      this.dataSource=new MatTableDataSource(data);

    })
    this.historialService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });
    this.historialService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(HistorialdeviajesDialogoComponent);
  }
  eliminar(id: number) {
    this.historialService.eliminar(id).subscribe(() => {
      this.historialService.listar().subscribe(data => {
        this.historialService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
