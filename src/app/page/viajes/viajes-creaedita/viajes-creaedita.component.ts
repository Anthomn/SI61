import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Vehiculo } from 'src/app/model/vehiculo';
import { Viajes } from 'src/app/model/viajes';
import { ViajesService } from 'src/app/service/viajes.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-viajes-creaedita',
  templateUrl: './viajes-creaedita.component.html',
  styleUrls: ['./viajes-creaedita.component.css']
})
export class ViajeCreaeditaComponent implements OnInit {
  viaje: Viajes = new Viajes();
  mensaje: string = "";
  edicion: boolean = false;
  listadeVehiculos: Vehiculo[]=[];
  idVehiculoselecionado: number = 0;
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  idviaje: number = 0;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = "";

  constructor(private viajeService: ViajesService,
    private vehiculoService: VehiculoService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idviaje = data['id'];
      this.edicion = data['id'] != null;
      this.init()
    });
    this.vehiculoService.listar().subscribe(data => {this.listadeVehiculos = data});
  }

  aceptar():void {
    if (this.idVehiculoselecionado > 0 && this.viaje.horafin.length>0 && this.viaje.horainicio.length>0){
      let q = new Vehiculo();
      q.id = this.idVehiculoselecionado;
      this.viaje.vehiculo = q;

      this.viaje.fecha = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      
      if (this.edicion){
        this.viajeService.modificar(this.viaje).subscribe( () => {
          this.viajeService.listar().subscribe(data => {
            this.viajeService.setLista(data);
          });
        });

      }else {
        this.viajeService.insertar(this.viaje).subscribe(() => {
          this.viajeService.listar().subscribe(data => {
            this.viajeService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          
          console.log(err);
        });
      }
      this.router.navigate(['viaje']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.viajeService.listarId(this.idviaje).subscribe(data => {
        this.viaje = data;
        //nuevo
        console.log(data);
        this.idVehiculoselecionado = data.vehiculo.id;

      })
    }

  }
}
