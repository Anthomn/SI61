import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ViajesService } from 'src/app/service/viajes.service';

@Component({
  selector: 'app-viaje-dialogo',
  templateUrl: './viaje-dialogo.component.html',
  styleUrls: ['./viaje-dialogo.component.css']
})
export class ViajeDialogoComponent implements OnInit {

   constructor(private viajeService: ViajesService,
      private dialogRef: MatDialogRef<ViajeDialogoComponent>
    ) { }

    ngOnInit(): void { }

    confirmar(estado: boolean) {
      this.viajeService.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
