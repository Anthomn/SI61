import { ActivatedRoute, Params, Router } from '@angular/router';
import { HistorialdeviajesService } from 'src/app/service/historialdeviajes.service';
import { Component, OnInit } from '@angular/core';
import { Historialdeviajes } from 'src/app/model/historialdeviajes';
import { Viajes } from 'src/app/model/viajes';
import { ViajesService } from 'src/app/service/viajes.service';


@Component({
  selector: 'app-historialdeviajes-creaedita',
  templateUrl: './historialdeviajes-creaedita.component.html',
  styleUrls: ['./historialdeviajes-creaedita.component.css']
})
export class HistorialdeviajesCreaeditaComponent implements OnInit {

  historialviaje: Historialdeviajes = new Historialdeviajes();
  id: number = 0;
  edicion: boolean = false;
  listaViaje: Viajes[] = [];
  idViajeSeleccionado: number = 0;
  mensaje: string = "";
  mensaje1: string = "";

  constructor(private historialviajeservice:HistorialdeviajesService,
    private route: ActivatedRoute,
    private router: Router, private viajesService: ViajesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.viajesService.listar().subscribe(data => { this.listaViaje = data });

  }
  aceptar() {
    if (this.historialviaje.observaciones.length > 0  && this.idViajeSeleccionado>0) {
      let p = new Viajes();

      p.idViaje = this.idViajeSeleccionado;
      this.historialviaje.viaje = p;    

      if (this.edicion) {
        this.historialviajeservice.modificar(this.historialviaje).subscribe(() => {
          this.historialviajeservice.listar().subscribe(data => {
            this.historialviajeservice.setLista(data);
          });
        });

      } else {
        this.historialviajeservice.insertar(this.historialviaje).subscribe(() => {
          this.historialviajeservice.listar().subscribe(data => {
            this.historialviajeservice.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          
          console.log(err);
        });
      }
      this.router.navigate(['historialviaje']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.historialviajeservice.listarId(this.id).subscribe(data => {
        this.historialviaje = data
        console.log(data);
        this.idViajeSeleccionado = data.viaje.idViaje;
      });

    }

  }
}
