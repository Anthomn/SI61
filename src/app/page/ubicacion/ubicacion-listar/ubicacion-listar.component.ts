import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ubicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { MatDialog } from '@angular/material/dialog';
import { UbicacionDialogoComponent } from './ubicacion-dialogo/ubicacion-dialogo.component';

@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionListarComponent implements OnInit {
  lista:Ubicacion[] = [];
  dataSource: MatTableDataSource<Ubicacion> = new MatTableDataSource();
  private idMayor:number=0;
  displayedColumns: string[]=['idubicacion', 'hora', 'distrito','accion1','accion2'];
  
  constructor(private cService: UbicacionService, private dialog: MatDialog) { }

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
    this.dialog.open(UbicacionDialogoComponent);
  }


  eliminar(id: number) {
    this.cService.eliminar(id).subscribe(() => {
      this.cService.listar().subscribe(data => {
        this.cService.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }  
}
