import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/service/conductor.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-conductor-dialogo',
  templateUrl: './conductor-dialogo.component.html',
  styleUrls: ['./conductor-dialogo.component.css']
})
export class ConductorDialogoComponent implements OnInit {

  constructor(private conductorService: ConductorService,
    private dialogRef: MatDialogRef<ConductorDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.conductorService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
