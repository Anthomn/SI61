import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Padredefamilia } from 'src/app/model/padredefamilia';
import { PadredefamiliaService } from 'src/app/service/padredefamilia.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-padredefamilia-creaedita',
  templateUrl: './padredefamilia-creaedita.component.html',
  styleUrls: ['./padredefamilia-creaedita.component.css']
})
export class PadredefamiliaCreaeditaComponent implements OnInit {
  padredefamilia: Padredefamilia = new Padredefamilia();
  mensaje: string = "";
  edicion: boolean = false;
  idpadre: number = 0;
  constructor(private padredefamiliaService: PadredefamiliaService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idpadre = data['id'];
      this.edicion = data['id'] != null;
      this.init()
    });
  }
  aceptar():void {
    if (this.padredefamilia.id > 0 && this.padredefamilia.nombre.length > 0 && this.padredefamilia.apellido.length > 0 && this.padredefamilia.edad > 0 && this.padredefamilia.email.length > 0 && this.padredefamilia.telefono > 0 && this.padredefamilia.direccion.length > 0){
      if (this.edicion){
        this.padredefamiliaService.modificar(this.padredefamilia).subscribe(data => {
          this.padredefamiliaService.listar().subscribe(data => {
            this.padredefamiliaService.setLista(data);
          })
        })
      }else {
        this.padredefamiliaService.insertar(this.padredefamilia).subscribe(data => {
          this.padredefamiliaService.listar().subscribe(data => {
            this.padredefamiliaService.setLista(data);
          })
        })
      }
      this.router.navigate(['padredefamilia'])
    }else{
      this.mensaje =  "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.padredefamiliaService.listarId(this.idpadre).subscribe(data => {
        this.padredefamilia = data;
      })
    }

  }
}
