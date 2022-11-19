import { ViajesReportevehiculosComponent } from './page/viajes/viajes-reportevehiculos/viajes-reportevehiculos.component';
import { ViajesReportefechaComponent } from './page/viajes/viajes-reportefecha/viajes-reportefecha.component';
import { HistorialdeviajesCreaeditaComponent } from './page/historialdeviajes/historialdeviajes-creaedita/historialdeviajes-creaedita.component';

import { ViajeCreaeditaComponent } from './page/viajes/viajes-creaedita/viajes-creaedita.component';

import { EstadoCreaeditaComponent } from './page/estado/estado-creaedita/estado-creaedita.component';
import { VehiculoCreaeditaComponent } from './page/vehiculo/vehiculo-creaedita/vehiculo-creaedita.component';

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
import { LandingComponent } from './page/landing/landing.component';
import { SolicitudCreaeditaComponent } from './page/solicitud/solicitud-creaedita/solicitud-creaedita.component';
import { MarcaComponent } from './page/marca/marca.component';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component';

import { ConductorCantidadComponent } from './page/conductor/conductor-cantidad/conductor-cantidad.component';
import { ViajesCantidadComponent } from './page/viajes/viajes-cantidad/viajes-cantidad.component';

import { VehiculoEstadoComponent } from './page/vehiculo/vehiculo-estado/vehiculo-estado.component';
import { VehiculoCantidadComponent } from './page/vehiculo/vehiculo-cantidad/vehiculo-cantidad.component';

import { ConductorReporteverificadosComponent } from './page/conductor/conductor-reporteverificados/conductor-reporteverificados.component';
import { ConductorReportetiempoComponent } from './page/conductor/conductor-reportetiempo/conductor-reportetiempo.component';

import { SolicitudReporteComponent } from './page/solicitud/solicitud-reporte/solicitud-reporte.component';
import { SolicitudReporteingresoComponent } from './page/solicitud/solicitud-reporteingreso/solicitud-reporteingreso.component';



const routes: Routes = [
  {path: 'conductor', component:ConductorComponent},
  { path: 'conductor/nuevo', component: ConductorCreaeditaComponent },
  { path: 'conductor/edicion/:id', component: ConductorCreaeditaComponent } ,

  {path: 'conductor/cantidad',component:ConductorCantidadComponent},

  {path:'conductor/reporteverificado', component:ConductorReporteverificadosComponent},
  {path:'conductor/reportetiempo',component:ConductorReportetiempoComponent},


  {path: 'padredefamilia', component: PadredefamiliaComponent},
  {path: 'padredefamilia/nuevo', component:  PadredefamiliaCreaeditaComponent},
  {path: 'padredefamilia/edicion/:id', component: PadredefamiliaCreaeditaComponent },


  {path: 'estado', component:EstadoComponent},
  { path: 'estado/nuevo', component: EstadoCreaeditaComponent },
  { path: 'estado/edicion/:id', component: EstadoCreaeditaComponent } ,

  {path: 'historialviaje', component:HistorialdeviajesComponent},
  { path: 'historialviaje/nuevo', component: HistorialdeviajesCreaeditaComponent},
  { path: 'historialviaje/edicion/:id', component: HistorialdeviajesCreaeditaComponent },

{path: 'ubicacion', component:UbicacionComponent},
{ path: 'ubicacion/nuevo', component: UbicacionCreaeditaComponent},
{ path: 'ubicacion/edicion/:id', component: UbicacionCreaeditaComponent },

{ path: 'solicitud', component:SolicitudComponent},
{ path: 'solicitud/nuevo', component: SolicitudCreaeditaComponent},
{ path: 'solicitud/edicion/:id', component: SolicitudCreaeditaComponent },
{ path: 'solicitud/reportes', component: SolicitudReporteComponent},
{ path: 'solicitud/reportesingreso', component: SolicitudReporteingresoComponent},

{path: 'viaje', component:ViajesComponent},
{ path: 'viaje/nuevo', component: ViajeCreaeditaComponent},
{ path: 'viaje/edicion/:id', component: ViajeCreaeditaComponent },

{ path: 'viaje/buscarfechamayor', component: ViajesReportefechaComponent },
{ path: 'viaje/buscarvehiculo', component: ViajesReportevehiculosComponent },


{path: 'viaje/cantidad',component: ViajesCantidadComponent},


{path: 'vehiculo', component:VehiculoComponent},
{ path: 'vehiculo/nuevo', component: VehiculoCreaeditaComponent},
{ path: 'vehiculo/edicion/:id', component: VehiculoCreaeditaComponent },
{path:'vehiculo/estado',component:VehiculoEstadoComponent},
{path:'vehiculo/cantidad',component:VehiculoCantidadComponent},

{path: 'marca', component:MarcaComponent},
{ path: 'marca/nuevo', component: MarcaCreaeditaComponent},
{ path: 'marca/edicion/:id', component: MarcaCreaeditaComponent },

{path: "**",component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
