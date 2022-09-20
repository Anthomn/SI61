import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Historialdeviajes } from 'src/app/model/historialdeviajes';
import { HistorialdeviajesService } from 'src/app/service/historialdeviajes.service';

@Component({
  selector: 'app-historialdeviajes-listar',
  templateUrl: './historialdeviajes-listar.component.html',
  styleUrls: ['./historialdeviajes-listar.component.css']
})
export class HistorialdeviajesListarComponent implements OnInit {
  lista:Historialdeviajes[] = [];
  dataSource:MatTableDataSource<Historialdeviajes>=new MatTableDataSource();
  displayedColumns:string[]=['idhistorial', 'observaciones', 'viajes']
  
  constructor(private historialService: HistorialdeviajesService) { }

  ngOnInit(): void {
    this.historialService.listar().subscribe(data=> {
      this.dataSource=new MatTableDataSource(data);

    })
    
  }

}
