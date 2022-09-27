import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PadredefamiliaService } from 'src/app/service/padredefamilia.service';
@Component({
  selector: 'app-padredefamilia-dialogo',
  templateUrl: './padredefamilia-dialogo.component.html',
  styleUrls: ['./padredefamilia-dialogo.component.css']
})
export class PadredefamiliaDialogoComponent implements OnInit {

  constructor(private propietarioService: PadredefamiliaService,
    private dialogRef: MatDialogRef<PadredefamiliaDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.propietarioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
