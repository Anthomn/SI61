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

import { UbicacionDialogoComponent } from './page/ubicacion/ubicacion-listar/ubicacion-dialogo/ubicacion-dialogo.component';

import { PadredefamiliaBuscarComponent } from './page/padredefamilia/padredefamilia-buscar/padredefamilia-buscar.component';
import { UbicacionBuscarComponent } from './page/ubicacion/ubicacion-buscar/ubicacion-buscar.component';
import { LandingComponent } from './page/landing/landing.component';
import { SolicitudCreaeditaComponent } from './page/solicitud/solicitud-creaedita/solicitud-creaedita.component';
import { SolicitudBuscarComponent } from './page/solicitud/solicitud-buscar/solicitud-buscar.component';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SolicitarDialogoComponent } from './page/solicitud/solicitud-listar/solicitar-dialogo/solicitar-dialogo.component';

import { ViajeCreaeditaComponent } from './page/viajes/viajes-creaedita/viajes-creaedita.component';
import { ViajesBuscarComponent } from './page/viajes/viajes-buscar/viajes-buscar.component';
import { ViajeDialogoComponent } from './page/viajes/viajes-listar/viaje-dialogo/viaje-dialogo.component';

import { VehiculoCreaeditaComponent } from './page/vehiculo/vehiculo-creaedita/vehiculo-creaedita.component';
import { VehiculoDialogoComponent } from './page/vehiculo/vehiculo-listar/vehiculo-dialogo/vehiculo-dialogo.component';
import { EstadoCreaeditaComponent } from './page/estado/estado-creaedita/estado-creaedita.component';
import { EstadoBuscarComponent } from './page/estado/estado-buscar/estado-buscar.component';
import { EstadoDialogoComponent } from './page/estado/estado-listar/estado-dialogo/estado-dialogo.component';
import { HistorialdeviajesCreaeditaComponent } from './page/historialdeviajes/historialdeviajes-creaedita/historialdeviajes-creaedita.component';
import { HistorialdeviajesDialogoComponent } from './page/historialdeviajes/historialdeviajes-listar/historialdeviajes-dialogo/historialdeviajes-dialogo.component';
import { MarcaComponent } from './page/marca/marca.component';
import { MarcaListarComponent } from './page/marca/marca-listar/marca-listar.component';
import { MarcaCreaeditaComponent } from './page/marca/marca-creaedita/marca-creaedita.component';
import { MarcaDialogoComponent } from './page/marca/marca-listar/marca-dialogo/marca-dialogo.component';
import { MarcaBuscarComponent } from './page/marca/marca-buscar/marca-buscar.component';
import { HistorialdeviajesBuscarComponent } from './page/historialdeviajes/historialdeviajes-buscar/historialdeviajes-buscar.component';
import { VehiculoBuscarComponent } from './page/vehiculo/vehiculo-buscar/vehiculo-buscar.component';
import { ConductorCantidadComponent } from './page/conductor/conductor-cantidad/conductor-cantidad.component';
import { ViajesCantidadComponent } from './page/viajes/viajes-cantidad/viajes-cantidad.component';




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
    UbicacionDialogoComponent,
    PadredefamiliaBuscarComponent,
    UbicacionBuscarComponent,
    LandingComponent,
    SolicitudCreaeditaComponent,
    SolicitudBuscarComponent,
    SolicitarDialogoComponent,

    ViajeCreaeditaComponent,
    ViajesBuscarComponent,
    ViajeDialogoComponent,
    VehiculoCreaeditaComponent,
    VehiculoDialogoComponent,
    EstadoCreaeditaComponent,
    EstadoBuscarComponent,
    EstadoDialogoComponent,
    HistorialdeviajesCreaeditaComponent,
    HistorialdeviajesDialogoComponent,
    MarcaComponent,
    MarcaListarComponent,
    MarcaCreaeditaComponent,
    MarcaDialogoComponent,
    MarcaBuscarComponent,
    HistorialdeviajesBuscarComponent,
    VehiculoBuscarComponent,
    ConductorCantidadComponent,
    ViajesCantidadComponent

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
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
