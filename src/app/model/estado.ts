import { Ubicacion } from 'src/app/model/ubicacion';
import { Solicitud } from 'src/app/model/solicitud';
import { Viajes } from "./viajes"

export class Estado{
    idEstado:number=0;
    direccionPartida: string ="";
    direccionLlegada: string ="";
    duracion: number = 0;
    comentario: string="";
    viaje:Viajes=new Viajes();
    solicitud:Solicitud=new Solicitud();
    ubicacion:Ubicacion=new Ubicacion();
}