import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ubicacion-dialogo',
  templateUrl: './ubicacion-dialogo.component.html',
  styleUrls: ['./ubicacion-dialogo.component.css']
})
export class UbicacionDialogoComponent implements OnInit {

  constructor(private cService: UbicacionService,
    private dialogRef: MatDialogRef<UbicacionDialogoComponent>
  ) { }

  ngOnInit(): void {  }

  confirmar(estado: boolean) {
    this.cService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }  

}
