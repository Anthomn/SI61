import { ActivatedRoute, Params, Router } from '@angular/router';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { SolicitarDialogoComponent } from './../../solicitud/solicitud-listar/solicitar-dialogo/solicitar-dialogo.component';
import { ViajesService } from 'src/app/service/viajes.service';
import { EstadoService } from 'src/app/service/estado.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { Ubicacion } from 'src/app/model/ubicacion';
import { Solicitud } from 'src/app/model/solicitud';
import { Viajes } from 'src/app/model/viajes';
import { Estado } from 'src/app/model/estado';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-estado-creaedita',
  templateUrl: './estado-creaedita.component.html',
  styleUrls: ['./estado-creaedita.component.css']
})
export class EstadoCreaeditaComponent implements OnInit {
  estado: Estado = new Estado();
  id: number = 0;
  edicion: boolean = false;
  listaViaje: Viajes[] = [];
  listaSolicitud: Solicitud[]=[];
  listaUbicacion:Ubicacion[]=[];
  idViajeSeleccionado:number=0;
  idSolicitudSeleccionado: number = 0;
  idUbicacionSeleccionado: number = 0;

  mensaje: string = "";



  mensaje1: string = "";
  constructor(private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router, private viajesService: ViajesService, private solicitudService: SolicitudService,private ubicacionService:UbicacionService) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.viajesService.listar().subscribe(data => { this.listaViaje = data });
    this.solicitudService.listar().subscribe(data => { this.listaSolicitud = data });
    this.ubicacionService.listar().subscribe(data => { this.listaUbicacion = data });
  }
  aceptar() {
    if (this.estado.direccionpartida.length > 0 &&
      this.estado.direccionllegada.length > 0 && this.estado.duracion >0 && this.idSolicitudSeleccionado >0 && this.idUbicacionSeleccionado>0 && this.idViajeSeleccionado>0) {
      let p = new Viajes();
      let q = new Solicitud();
      let t = new Ubicacion();
      p.idviaje = this.idViajeSeleccionado;
      q.idSolicitud = this.idSolicitudSeleccionado;
      t.id=this.idUbicacionSeleccionado;
      this.estado.idviaje = p;
      this.estado.idsolicitud = q;
      this.estado.idubicacion=t;      

      if (this.edicion) {
        this.estadoService.modificar(this.estado).subscribe(() => {
          this.estadoService.listar().subscribe(data => {
            this.estadoService.setLista(data);
          });
        });

      } else {
        this.estadoService.insertar(this.estado).subscribe(() => {
          this.estadoService.listar().subscribe(data => {
            this.estadoService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          
          console.log(err);
        });
      }
      this.router.navigate(['estado']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.estadoService.listarId(this.id).subscribe(data => {
        this.estado = data
        console.log(data);
        this.idViajeSeleccionado = data.idviaje.idviaje;
        this.idSolicitudSeleccionado = data.idsolicitud.idSolicitud;
        this.idUbicacionSeleccionado =data.idubicacion.id;
      });

    }

  }

}
