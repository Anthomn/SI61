import { Viajes } from "./viajes"

export class Estado{

    idestado:number=0;
    caracteristicas: string ="";
    tiemporestante: number = 0;
    comentarios: string="";
    viajes:Viajes=new Viajes();
}