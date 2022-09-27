import { Component, OnInit } from '@angular/core';
import { Padredefamilia } from 'src/app/model/padredefamilia';
import {MatTableDataSource} from '@angular/material/table'
import { PadredefamiliaService } from 'src/app/service/padredefamilia.service';
import { MatDialog } from '@angular/material/dialog';
import { PadredefamiliaDialogoComponent } from './padredefamilia-dialogo/padredefamilia-dialogo.component';
@Component({
  selector: 'app-padredefamilia-listar',
  templateUrl: './padredefamilia-listar.component.html',
  styleUrls: ['./padredefamilia-listar.component.css']
})
export class PadredefamiliaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Padredefamilia> = new MatTableDataSource();
  displayedColumns:string[]=['idpadre', 'nombre', 'apellido','edad','email','telefono','direccion','acciones','accion2'];
  constructor(private padreService: PadredefamiliaService, private dialog: MatDialog) { }
  private idMayor: number = 0;
  ngOnInit(): void {
    this.padreService.listar().subscribe(data => {
      //this.lista =data ;
      this.dataSource=new MatTableDataSource(data);
    })
    this.padreService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.padreService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });}

    confirmar(idpadre: number) {
      this.idMayor = idpadre;
      this.dialog.open(PadredefamiliaDialogoComponent);
    }


    eliminar(idpadre: number)
    {
      this.padreService.eliminar(idpadre).subscribe(() => {
        this.padreService.listar().subscribe(data => {
          this.padreService.setLista(data);/* se ejecuta la lÃ­nea 27*/
        });
      });
    }
}





