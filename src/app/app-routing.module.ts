import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorComponent } from './page/conductor/conductor.component';
import { PadredefamiliaComponent } from './page/padredefamilia/padredefamilia.component';
import { EstadoComponent } from './page/estado/estado.component';
import { HistorialdeviajesComponent } from './page/historialdeviajes/historialdeviajes.component';
import { UbicacionComponent } from './page/ubicacion/ubicacion.component';
import { SolicitudComponent } from './page/solicitud/solicitud.component';
import { ViajesComponent } from './page/viajes/viajes.component';


const routes: Routes = [{
  path: 'conductor', component:ConductorComponent, children: [
    

  ]
}, {
  path: 'padredefamilia', component: PadredefamiliaComponent, children: [

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
