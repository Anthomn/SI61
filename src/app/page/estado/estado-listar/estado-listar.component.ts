import { EstadoDialogoComponent } from './estado-dialogo/estado-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/service/estado.service';
import { Estado } from 'src/app/model/estado';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.css']
})
export class EstadoListarComponent implements OnInit {
  lista:Estado[] = [];  
  dataSource:MatTableDataSource<Estado> = new MatTableDataSource();
  displayedColumns:string[]=['idviaje', 'idsolicitud', 'idubicacion','direccionpartida','direccionllegada','duracion','comentarios' ]
  private idMayor: number = 0;
  constructor(private estadoService: EstadoService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.estadoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });    
  
  this.estadoService.getLista().subscribe(data => {
  this.dataSource = new MatTableDataSource(data);
  console.log(data);

  });

  this.estadoService.getConfirmaEliminacion().subscribe(data => {
  data == true ? this.eliminar(this.idMayor) : false;
  });
  }
  confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(EstadoDialogoComponent);
  }
  eliminar(id: number) {
      this.estadoService.eliminar(id).subscribe(() => {
      this.estadoService.listar().subscribe(data => {
    this.estadoService.setLista(data);/* se ejecuta la línea 27 */
  });
  });
  }
}

