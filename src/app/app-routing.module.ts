import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorComponent } from './page/conductor/conductor.component';
import { PadredefamiliaComponent } from './page/padredefamilia/padredefamilia.component';
import { EstadoComponent } from './page/estado/estado.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
