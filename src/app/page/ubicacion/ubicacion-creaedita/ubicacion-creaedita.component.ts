import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/service/ubicacion.service';

@Component({
  selector: 'app-ubicacion-creaedita',
  templateUrl: './ubicacion-creaedita.component.html',
  styleUrls: ['./ubicacion-creaedita.component.css']
})
export class UbicacionCreaeditaComponent implements OnInit {
  ubicacion: Ubicacion = new Ubicacion();
  mensaje: string ="";
  edicion: boolean = false;
  id: number = 0;  
  constructor(private ubicacionService: UbicacionService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
  }
  aceptar(): void {
    if (this.ubicacion.id > 0 && this.ubicacion.hora > 0 && this.ubicacion.distrito.length> 0) {

      this.ubicacionService.insertar(this.ubicacion).subscribe(data => {
        this.ubicacionService.listar().subscribe(data => {
          this.ubicacionService.setLista(data);
        })
      })
      this.router.navigate(['ubicacion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.ubicacionService.listarId(this.id).subscribe(data => {
        this.ubicacion = data;
      })
    }

  }  

}


