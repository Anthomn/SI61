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
import { PadredefamiliaListarComponent } from './page/padredefamilia/padredefamilia-listar/padredefamilia-listar.component'

@NgModule({
  declarations: [
    AppComponent,
    ConductorComponent,
    ConductorListarComponent,
    PadredefamiliaComponent,
    PadredefamiliaListarComponent
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
