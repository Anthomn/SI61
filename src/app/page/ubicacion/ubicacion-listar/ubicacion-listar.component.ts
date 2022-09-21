import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ubicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/service/ubicacion.service';

@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Ubicacion> = new MatTableDataSource();
  displayedColumns: string[]=['idubicacion', 'hora', 'distrito'];
  constructor(private us: UbicacionService) { }

  ngOnInit(): void {
    this.us.listar().subscribe(data=> {
      this.dataSource=new MatTableDataSource(data);

    })
    this.us.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
