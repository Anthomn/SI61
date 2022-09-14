import { Vehiculo } from "./vehiculo";
import { Conductor } from "./conductor";
import { Padredefamilia } from "./padredefamilia";

export class Solicitud{

    idsolicitud:number=0;
    precio: number=0;
    duracion: string ="";
    fecha: number = 0;
    descripcion: string="";
    vehiculo:Vehiculo=new Vehiculo();
    conductor:Conductor=new Conductor();
    padredefamilia:Padredefamilia=new Padredefamilia();
  }
  