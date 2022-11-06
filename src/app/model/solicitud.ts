import { Conductor } from "./conductor";
import { Padredefamilia } from "./padredefamilia";

export class Solicitud{

    idSolicitud:number=0;
    precio:number=0;
    fecha:string="";
    descripcion: string="";
    fechainicio: string="";
    fechafin: string="";
    nombrehijo: string="";
    edadhijo: number=0;
    direccioncasa: string="";
    direccioncolegio: string="";
    estado: string="";
    conductor:Conductor=new Conductor();
    padredefamilia:Padredefamilia=new Padredefamilia();
  }
  