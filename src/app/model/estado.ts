import { Ubicacion } from 'src/app/model/ubicacion';
import { Solicitud } from 'src/app/model/solicitud';
import { Viajes } from "./viajes"

export class Estado{



    direccionpartida: string ="";
    direccionllegada: string ="";
    duracion: number = 0;
    comentario: string="";
    idviaje:Viajes=new Viajes();
    idsolicitud:Solicitud=new Solicitud();
    idubicacion:Ubicacion=new Ubicacion();
}