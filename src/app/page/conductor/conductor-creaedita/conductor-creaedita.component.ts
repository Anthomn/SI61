
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConductorService } from './../../../service/conductor.service';
import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/model/conductor';

@Component({
  selector: 'app-conductor-creaedita',
  templateUrl: './conductor-creaedita.component.html',
  styleUrls: ['./conductor-creaedita.component.css']
})
export class ConductorCreaeditaComponent implements OnInit {
  conductor: Conductor = new Conductor();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private conductorService: ConductorService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }


  aceptar(): void {
    if (this.conductor.nombre.length > 0 && this.conductor.apellido.length > 0) {
      if (this.edicion) {
        this.conductorService.modificar(this.conductor).subscribe(data => {
          this.conductorService.listar().subscribe(data => {
            this.conductorService.setLista(data);
          })
        })
      } else {

        this.conductorService.insertar(this.conductor).subscribe(data => {
          this.conductorService.listar().subscribe(data => {
            this.conductorService.setLista(data);
          })
        })
      }
      this.router.navigate(['conductor']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.conductorService.listarId(this.id).subscribe(data => {
        this.conductor = data;
      })
    }

  }
}
