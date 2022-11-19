import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CantidadVehiculoRespuesta } from 'src/app/model/cantidadvehiculorespuesta';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-cantidad',
  templateUrl: './vehiculo-cantidad.component.html',
  styleUrls: ['./vehiculo-cantidad.component.css']
})
export class VehiculoCantidadComponent implements OnInit {

  lista: CantidadVehiculoRespuesta[]=[];
  dataSource:MatTableDataSource<CantidadVehiculoRespuesta> = new MatTableDataSource();
  displayedColumns:string[]=['marca','cantidad'];
  constructor(private vService:VehiculoService) { }

  ngOnInit(): void {
    this.vService.cantidad().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
