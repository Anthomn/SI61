import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CantidadVehiculoXConductor } from 'src/app/model/cantidadvehiculoconductor';
import { ConductorService } from 'src/app/service/conductor.service';

@Component({
  selector: 'app-conductor-cantidad',
  templateUrl: './conductor-cantidad.component.html',
  styleUrls: ['./conductor-cantidad.component.css']
})
export class ConductorCantidadComponent implements OnInit {

  lista: CantidadVehiculoXConductor[] =[];
  dataSource:MatTableDataSource<CantidadVehiculoXConductor> = new MatTableDataSource();
  displayedColumns:string[]=['nombre','apellido','dni','cantidad'];
  constructor(private vService:ConductorService) { }

  ngOnInit(): void {
    this.vService.CantidadVehiculosXConductor().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }
}