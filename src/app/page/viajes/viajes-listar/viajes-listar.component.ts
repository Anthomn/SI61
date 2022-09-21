import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Viajes } from 'src/app/model/viajes';
import { ViajesService } from 'src/app/service/viajes.service';

@Component({
  selector: 'app-viajes-listar',
  templateUrl: './viajes-listar.component.html',
  styleUrls: ['./viajes-listar.component.css']
})
export class ViajesListarComponent implements OnInit {
  lista:Viajes[] = [];
  dataSource:MatTableDataSource<Viajes>=new MatTableDataSource();
  displayedColumns:string[]=['idviaje', 'pasajeros', 'direccion', 'solicitud']

  constructor(private ViajesService: ViajesService) { }

  ngOnInit(): void {
    this.ViajesService.listar().subscribe(data=> {
      this.dataSource=new MatTableDataSource(data);

    })
  }

}
