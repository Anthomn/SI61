import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConductorComponent } from './page/conductor/conductor.component';
import { ConductorListarComponent } from './page/conductor/conductor-listar/conductor-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import { PadredefamiliaComponent } from './page/padredefamilia/padredefamilia.component';
import { PadredefamiliaListarComponent } from './page/padredefamilia/padredefamilia-listar/padredefamilia-listar.component';
import { EstadoComponent } from './page/estado/estado.component';
import { EstadoListarComponent } from './page/estado/estado-listar/estado-listar.component';
import { PadredefamiliaCreaeditaComponent } from './page/padredefamilia/padredefamilia-creaedita/padredefamilia-creaedita.component';
import { HistorialdeviajesComponent } from './page/historialdeviajes/historialdeviajes.component';
import { HistorialdeviajesListarComponent } from './page/historialdeviajes/historialdeviajes-listar/historialdeviajes-listar.component';
import { UbicacionComponent } from './page/ubicacion/ubicacion.component';
import { UbicacionListarComponent } from './page/ubicacion/ubicacion-listar/ubicacion-listar.component';
import { SolicitudComponent } from './page/solicitud/solicitud.component';
import { SolicitudListarComponent } from './page/solicitud/solicitud-listar/solicitud-listar.component';
import { ViajesComponent } from './page/viajes/viajes.component';
import { ViajesListarComponent } from './page/viajes/viajes-listar/viajes-listar.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { VehiculoListarComponent } from './page/vehiculo/vehiculo-listar/vehiculo-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConductorComponent,
    ConductorListarComponent,
    PadredefamiliaComponent,
    PadredefamiliaListarComponent,
    EstadoComponent,
    EstadoListarComponent,
    PadredefamiliaCreaeditaComponent,
    HistorialdeviajesComponent,
    HistorialdeviajesListarComponent,
    UbicacionComponent,
    UbicacionListarComponent,
    SolicitudComponent,
    SolicitudListarComponent,
    ViajesComponent,
    ViajesListarComponent,
    VehiculoComponent,
    VehiculoListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
