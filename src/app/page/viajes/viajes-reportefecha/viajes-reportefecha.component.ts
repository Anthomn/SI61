import { Viajes } from 'src/app/model/viajes';
import { MatTableDataSource } from '@angular/material/table';
import { ViajesService } from './../../../service/viajes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes-reportefecha',
  templateUrl: './viajes-reportefecha.component.html',
  styleUrls: ['./viajes-reportefecha.component.css']
})
export class ViajesReportefechaComponent implements OnInit {
  dataSource: MatTableDataSource<Viajes> = new MatTableDataSource();
  displayedColumns: string[] =['id', 'fecha', 'horafin',  'horainicio', 'vehiculo']
  constructor(private vService: ViajesService) { }

  ngOnInit(): void {
    this.vService.reporte().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    
  }

}
