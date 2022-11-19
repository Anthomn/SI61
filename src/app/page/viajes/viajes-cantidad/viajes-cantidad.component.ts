import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CantidadViajesXFecha } from 'src/app/model/cantidadviajesfecha';
import { ViajesService } from 'src/app/service/viajes.service';

@Component({
  selector: 'app-viajes-cantidad',
  templateUrl: './viajes-cantidad.component.html',
  styleUrls: ['./viajes-cantidad.component.css']
})
export class ViajesCantidadComponent implements OnInit {

  lista: CantidadViajesXFecha[] =[];
  dataSource:MatTableDataSource<CantidadViajesXFecha> = new MatTableDataSource();
  displayedColumns:string[]=['fecha','cantidad'];
  constructor(private vService:ViajesService) { }

  ngOnInit(): void {
    this.vService.CantidadViajesXFecha().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
