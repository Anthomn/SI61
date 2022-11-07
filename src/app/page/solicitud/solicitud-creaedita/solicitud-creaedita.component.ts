import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Conductor } from 'src/app/model/conductor';
import { Padredefamilia } from 'src/app/model/padredefamilia';
import { Solicitud } from 'src/app/model/solicitud';
import { ConductorService } from 'src/app/service/conductor.service';
import { PadredefamiliaService } from 'src/app/service/padredefamilia.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import * as moment from 'moment';

@Component({
  selector: 'app-solicitud-creaedita',
  templateUrl: './solicitud-creaedita.component.html',
  styleUrls: ['./solicitud-creaedita.component.css']
})
export class SolicitudCreaeditaComponent implements OnInit {
    solicitud: Solicitud = new Solicitud();
    id: number = 0;
    edicion: boolean = false;
    listaConductores: Conductor[] = [];
    listaPadres: Padredefamilia[]=[];
    idConductorSeleccionado: number = 0;
    idPadreSeleccionado: number = 0;

    fechaSeleccionada: Date = moment().add(-1, 'days').toDate();

    mensaje: string = "";

    maxFecha: Date = moment().add(-1, 'days').toDate();

    mensaje1: string = "";
    constructor(private solicitudService: SolicitudService,
      private route: ActivatedRoute,
      private router: Router, private conductorService: ConductorService, private padreService: PadredefamiliaService) { }
  
  
    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
      this.conductorService.listar().subscribe(data => { this.listaConductores = data });
      this.padreService.listar().subscribe(data => { this.listaPadres = data });
    }
    aceptar() {
      if (this.solicitud.descripcion.length > 0 &&
        this.idConductorSeleccionado > 0 ) {
        let p = new Conductor();
        let q = new Padredefamilia();
        p.idConductor = this.idConductorSeleccionado;
        q.id = this.idPadreSeleccionado;
        this.solicitud.conductor = p;
        this.solicitud.padredefamilia = q;

        this.solicitud.fecha = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');

        if (this.edicion) {
          this.solicitudService.modificar(this.solicitud).subscribe(() => {
            this.solicitudService.listar().subscribe(data => {
              this.solicitudService.setLista(data);
            });
          });
  
        } else {
          this.solicitudService.insertar(this.solicitud).subscribe(() => {
            this.solicitudService.listar().subscribe(data => {
              this.solicitudService.setLista(data);
            });
          }, err => {
            //this.mensaje=err
            
            console.log(err);
          });
        }
        this.router.navigate(['solicitud']);
  
      }
      else {
        this.mensaje1 = "Complete los valores requeridos";
      }
    }
  
    init() {
      if (this.edicion) {
        this.solicitudService.listarId(this.id).subscribe(data => {
          this.solicitud = data
          console.log(data);
          this.idConductorSeleccionado = data.conductor.idConductor;
          this.idPadreSeleccionado = data.padredefamilia.id;
        });
  
      }
  
    }
  
  }
  
