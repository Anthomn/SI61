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
  displayedColumns:string[]=['idvehiculo', 'aniomodelo', 'placa', 'color', 'estado', 'marca', 'caracteristica', 'conductor']

  constructor(private VehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.VehiculoService.listar().subscribe(data=> {
      this.dataSource=new MatTableDataSource(data);

    })
  }

}

