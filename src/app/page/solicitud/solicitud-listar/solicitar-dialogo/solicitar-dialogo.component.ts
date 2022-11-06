import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitar-dialogo',
  templateUrl: './solicitar-dialogo.component.html',
  styleUrls: ['./solicitar-dialogo.component.css']
})
export class SolicitarDialogoComponent implements OnInit {
    constructor(private solicitudService: SolicitudService,
      private dialogRef: MatDialogRef<SolicitarDialogoComponent>
    ) { }
  
    ngOnInit(): void { }
  
    confirmar(estado: boolean) {
      this.solicitudService.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
  }