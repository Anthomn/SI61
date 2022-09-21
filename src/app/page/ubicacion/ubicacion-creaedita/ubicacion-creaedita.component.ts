import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private ubicacionService: UbicacionService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.ubicacion.idubicacion > 0 && this.ubicacion.hora > 0 && this.ubicacion.distrito.length> 0) {

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
}


