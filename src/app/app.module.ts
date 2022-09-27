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
import { ConductorCreaeditaComponent } from './page/conductor/conductor-creaedita/conductor-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UbicacionCreaeditaComponent } from './page/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { ConductorDialogoComponent } from './page/conductor/conductor-listar/conductor-dialogo/conductor-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConductorBuscarComponent } from './page/conductor/conductor-buscar/conductor-buscar.component';
import { PadredefamiliaBuscarComponent } from './page/padredefamilia-buscar/padredefamilia-buscar.component';


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
    ConductorCreaeditaComponent,
    UbicacionCreaeditaComponent,
    ConductorDialogoComponent,
    ConductorBuscarComponent,
    PadredefamiliaBuscarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
