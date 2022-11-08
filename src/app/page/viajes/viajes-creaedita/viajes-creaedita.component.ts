import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Vehiculo } from 'src/app/model/vehiculo';
import { Viajes } from 'src/app/model/viajes';
import { ViajesService } from 'src/app/service/viajes.service';

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
  fecha: Date = moment().add(-1, 'days').toDate();
  idviaje: number = 0;
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(private viajeService: ViajesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idviaje = data['id'];
      this.edicion = data['id'] != null;
      this.init()
    });
  }
  aceptar():void {
    let q = new Vehiculo();
    q.idvehiculo = this.idVehiculoselecionado;
    this.viaje.idvehiculo = q;

    this.viaje.fecha = moment(this.fecha).format('YYYY-MM-DDTHH:mm:ss');

    if (this.viaje.idviaje > 0 && this.idVehiculoselecionado > 0 && this.viaje.horafin.length>0 && this.viaje.horainicio.length>0 && this.viaje.fecha.length>0){
      if (this.edicion){
        this.viajeService.modificar(this.viaje).subscribe(data => {
          this.viajeService.listar().subscribe(data => {
            this.viajeService.setLista(data);
          })
        })
      }else {
        this.viajeService.insertar(this.viaje).subscribe(data => {
          this.viajeService.listar().subscribe(data => {
            this.viajeService.setLista(data);
          })
        })
      }
      this.router.navigate(['viaje'])
    }else{
      this.mensaje =  "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.viajeService.listarId(this.idviaje).subscribe(data => {
        this.viaje = data;
        //nuevo
        console.log(data);
        this.idVehiculoselecionado = data.idvehiculo.idvehiculo;

      })
    }

  }
}
