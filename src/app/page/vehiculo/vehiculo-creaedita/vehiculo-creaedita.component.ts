import { MarcaService } from './../../../service/marca.service';
import { Marca } from './../../../model/marca';
import { ConductorService } from 'src/app/service/conductor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Conductor } from './../../../model/conductor';
import { Vehiculo } from 'src/app/model/vehiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo-creaedita',
  templateUrl: './vehiculo-creaedita.component.html',
  styleUrls: ['./vehiculo-creaedita.component.css']
})
export class VehiculoCreaeditaComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  id: number = 0;
  edicion: boolean = false;
  listaConductores: Conductor[] = [];
  listaMarcas: Marca[] =[];
  idMarcaSeleccionada: number = 0;
  idConductorSeleccionado: number = 0;
  mensaje: string = "";
  mensaje1: string = "";
  
  constructor( private vehiculoService: VehiculoService,
      private route: ActivatedRoute,
      private router: Router, private conductorservice:ConductorService,
      private marcaservice:MarcaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.conductorservice.listar().subscribe(data => { this.listaConductores = data });
    this.marcaservice.listar().subscribe(data => {this.listaMarcas = data});
  }

  aceptar() {
    if (this.vehiculo.placa.length > 0 &&
      this.idConductorSeleccionado > 0 &&
      this.idMarcaSeleccionada > 0 ) {
      let p = new Conductor();
      let q = new Marca();
      p.idConductor = this.idConductorSeleccionado;
      q.idMarca = this.idMarcaSeleccionada;
      this.vehiculo.conductor = p;
      this.vehiculo.marca = q;


      if (this.edicion) {
        this.vehiculoService.modificar(this.vehiculo).subscribe(() => {
          this.vehiculoService.listar().subscribe(data => {
            this.vehiculoService.setLista(data);
          });
        });

      } else {
        this.vehiculoService.insertar(this.vehiculo).subscribe(() => {
          this.vehiculoService.listar().subscribe(data => {
            this.vehiculoService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          
          console.log(err);
        });
      }
      this.router.navigate(['vehiculo']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.vehiculoService.listarId(this.id).subscribe(data => {
        this.vehiculo = data
        console.log(data);
        this.idConductorSeleccionado = data.conductor.idConductor;
        this.idMarcaSeleccionada = data.marca.idMarca;
      });

    }

  }
}
