import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorComponent } from './page/conductor/conductor.component';
import { PadredefamiliaComponent } from './page/padredefamilia/padredefamilia.component';
import { EstadoComponent } from './page/estado/estado.component';
import { HistorialdeviajesComponent } from './page/historialdeviajes/historialdeviajes.component';
import { UbicacionComponent } from './page/ubicacion/ubicacion.component';
import { SolicitudComponent } from './page/solicitud/solicitud.component';
import { ViajesComponent } from './page/viajes/viajes.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { ConductorCreaeditaComponent } from './page/conductor/conductor-creaedita/conductor-creaedita.component';
import { UbicacionCreaeditaComponent } from './page/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { PadredefamiliaCreaeditaComponent } from './page/padredefamilia/padredefamilia-creaedita/padredefamilia-creaedita.component';
const routes: Routes = [{
  path: 'conductor', component:ConductorComponent, children: [
    { path: 'nuevo', component:  ConductorCreaeditaComponent}

  ]
}, {
  path: 'padredefamilia', component: PadredefamiliaComponent, children: [
    { path: 'nuevo', component:  PadredefamiliaCreaeditaComponent},
    { path: 'edicion/:id', component: PadredefamiliaCreaeditaComponent }

  ]
},
{
  path: 'estado', component:EstadoComponent, children: [

  ]
},
{
  path: 'historialdeviajes', component:HistorialdeviajesComponent, children: [

  ]
},

{
  path: 'ubicacion', component:UbicacionComponent, children: [
    { path: 'nuevo', component: UbicacionCreaeditaComponent}
  ]
},

{
  path: 'solicitud', component:SolicitudComponent, children: [

  ]
},

{
  path: 'viajes', component:ViajesComponent, children: [

  ]
},

{
  path: 'vehiculo', component:VehiculoComponent, children: [

  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
