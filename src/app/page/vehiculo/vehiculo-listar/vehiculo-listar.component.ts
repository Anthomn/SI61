import { VehiculoDialogoComponent } from './vehiculo-dialogo/vehiculo-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {
  lista:Vehiculo[] = [];
  dataSource:MatTableDataSource<Vehiculo>=new MatTableDataSource();
  displayedColumns:string[]=['idvehiculo', 'aniomodelo', 'placa', 'color', 'estado', 'caracteristica', 'idmarca','conductor','acciones']
  private idMayor: number = 0;

  constructor(private VehiculoService: VehiculoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.VehiculoService.listar().subscribe(data=> {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);

    });

    this.VehiculoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });
    this.VehiculoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(VehiculoDialogoComponent);
  }
  eliminar(id: number) {
    this.VehiculoService.eliminar(id).subscribe(() => {
      this.VehiculoService.listar().subscribe(data => {
        this.VehiculoService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}

