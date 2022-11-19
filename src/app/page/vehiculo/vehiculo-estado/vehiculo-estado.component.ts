import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-estado',
  templateUrl: './vehiculo-estado.component.html',
  styleUrls: ['./vehiculo-estado.component.css']
})
export class VehiculoEstadoComponent implements OnInit {

  dataSource:MatTableDataSource<Vehiculo>=new MatTableDataSource();
  displayedColumns:string[]=['idvehiculo', 'aniomodelo', 'placa', 'color', 'estado', 'caracteristica', 'idmarca','conductor']

  constructor(private vService:VehiculoService) { }

  ngOnInit(): void {

    this.vService.estado().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    });

  }

}
