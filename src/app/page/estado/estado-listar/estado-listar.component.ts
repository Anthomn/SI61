import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/service/estado.service';
import { Estado } from 'src/app/model/estado';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.css']
})
export class EstadoListarComponent implements OnInit {

  lista:Estado[] = [];
  dataSource:MatTableDataSource<Estado> = new MatTableDataSource();
  displayedColumns:string[]=['idestado', 'caracteristicas', 'tiemporestante','comentarios','viajes' ]

  constructor(private cEstado: EstadoService) { }

  ngOnInit(): void {
    this.cEstado.listar().subscribe(data => {
      //this.lista =data ;
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
