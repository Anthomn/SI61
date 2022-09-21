import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Padredefamilia } from 'src/app/model/padredefamilia';
import { PadredefamiliaService } from 'src/app/service/padredefamilia.service';

@Component({
  selector: 'app-padredefamilia-creaedita',
  templateUrl: './padredefamilia-creaedita.component.html',
  styleUrls: ['./padredefamilia-creaedita.component.css']
})
export class PadredefamiliaCreaeditaComponent implements OnInit {
  padredefamilia: Padredefamilia = new Padredefamilia();
  mensaje: string = "";
  constructor(private padredefamiliaService: PadredefamiliaService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar():void {
    if (this.padredefamilia.idpadre > 0 && this.padredefamilia.nombre.length > 0 && this.padredefamilia.apellido.length > 0 && this.padredefamilia.edad > 0 && this.padredefamilia.email.length > 0 && this.padredefamilia.telefono > 0){
      this.padredefamiliaService.insertar(this.padredefamilia).subscribe(data => {
        this.padredefamiliaService.listar().subscribe(data => {
          this.padredefamiliaService.setLista(data);
        })
      })
      this.router.navigate(['padredefamilia'])
    }else{
      this.mensaje =  "Complete los valores requeridos";
    }
  }
}
