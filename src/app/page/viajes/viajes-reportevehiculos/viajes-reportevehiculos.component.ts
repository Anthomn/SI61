import { ViajesService } from 'src/app/service/viajes.service';
import { MatTableDataSource } from '@angular/material/table';
import { Respuesta } from './../../../model/respuesta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes-reportevehiculos',
  templateUrl: './viajes-reportevehiculos.component.html',
  styleUrls: ['./viajes-reportevehiculos.component.css']
})
export class ViajesReportevehiculosComponent implements OnInit {

  lista: Respuesta[] =[];
  dataSource: MatTableDataSource<Respuesta> = new MatTableDataSource();
  displayedColumns: string[] = ['placa', 'cantidad'];
  constructor(private vService: ViajesService) { }

  ngOnInit(): void {
    this.vService.buscarcantidadvehiculo().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
