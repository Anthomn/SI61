import { EstadoService } from 'src/app/service/estado.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estado-dialogo',
  templateUrl: './estado-dialogo.component.html',
  styleUrls: ['./estado-dialogo.component.css']
})
export class EstadoDialogoComponent implements OnInit {

  constructor(private estadoService: EstadoService,
    private dialogRef: MatDialogRef<EstadoDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.estadoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
