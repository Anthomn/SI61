import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/model/conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import {MatTableDataSource} from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import { ConductorDialogoComponent } from './conductor-dialogo/conductor-dialogo.component';

@Component({
  selector: 'app-conductor-listar',
  templateUrl: './conductor-listar.component.html',
  styleUrls: ['./conductor-listar.component.css']
})
export class ConductorListarComponent implements OnInit {
  lista:Conductor[] = [];
  dataSource:MatTableDataSource<Conductor> = new MatTableDataSource();
  private idMayor:number=0;
  displayedColumns:string[]=['idconductor', 'nombre', 'apellido','dni','genero','edad','tiempoconduccion','direccion','verificado','accion1','accion2']
  
  constructor(private cService: ConductorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })

    this.cService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.cService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });    
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ConductorDialogoComponent);
  }


  eliminar(id: number) {
    this.cService.eliminar(id).subscribe(() => {
      this.cService.listar().subscribe(data => {
        this.cService.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
