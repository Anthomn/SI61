import { MatDialogRef } from '@angular/material/dialog';
import { HistorialdeviajesService } from 'src/app/service/historialdeviajes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialdeviajes-dialogo',
  templateUrl: './historialdeviajes-dialogo.component.html',
  styleUrls: ['./historialdeviajes-dialogo.component.css']
})
export class HistorialdeviajesDialogoComponent implements OnInit {

  constructor(private historialService:HistorialdeviajesService,
    private dialogRef :MatDialogRef<HistorialdeviajesDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.historialService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
