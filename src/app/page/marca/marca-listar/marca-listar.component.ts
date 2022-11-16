import { MarcaDialogoComponent } from './marca-dialogo/marca-dialogo.component';
import { MarcaService } from './../../../service/marca.service';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from './../../../model/marca';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca-listar',
  templateUrl: './marca-listar.component.html',
  styleUrls: ['./marca-listar.component.css']
})
export class MarcaListarComponent implements OnInit {
  lista: Marca[] = [];
  dataSource:MatTableDataSource<Marca> = new MatTableDataSource();
  private idMayor: number=0;
  displayedColumns:string[]=['idmarca', 'nombremarca','acciones']

  constructor(private mService: MarcaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.mService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })

    this.mService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.mService.getConfirmaEliminacion().subscribe(data =>{
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(MarcaDialogoComponent);
  }

  eliminar(id: number) {
    this.mService.eliminar(id).subscribe(() => {
      this.mService.listar().subscribe(data => {
        this.mService.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
