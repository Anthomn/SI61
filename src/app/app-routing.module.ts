import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorComponent } from './page/conductor/conductor.component';
import { PadredefamiliaComponent } from './page/padredefamilia/padredefamilia.component';
import { EstadoComponent } from './page/estado/estado.component';
import { HistorialdeviajesComponent } from './page/historialdeviajes/historialdeviajes.component';


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
