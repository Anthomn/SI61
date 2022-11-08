import { ViajeDialogoComponent } from './viaje-dialogo/viaje-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Viajes } from 'src/app/model/viajes';
import { ViajesService } from 'src/app/service/viajes.service';

@Component({
  selector: 'app-viajes-listar',
  templateUrl: './viajes-listar.component.html',
  styleUrls: ['./viajes-listar.component.css']
})
export class ViajesListarComponent implements OnInit {
  lista: Viajes[] = [];
  dataSource: MatTableDataSource<Viajes> = new MatTableDataSource();
  displayedColumns: string[] = ['idviaje','idvehiculo', 'fecha','horainicio' ,'horafinal'];
  private idMayor: number = 0;

  constructor(private viajeService: ViajesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.viajeService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.viajeService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.viajeService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ViajeDialogoComponent);
  }
  eliminar(id: number) {
    this.viajeService.eliminar(id).subscribe(() => {
      this.viajeService.listar().subscribe(data => {
        this.viajeService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
