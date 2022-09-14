import { Historialdeviajes } from "./historialdeviajes";

export class Conductor{
    idconductor:number=0;
    nombre: string ="";
    apellido: string = "";
    dni: number=0;
    genero: string ="";
    edad: number = 0;
    tiempoconduccion: number =0;
    direccion: string ="";
    verificado: string ="";
    historialdeviajes:Historialdeviajes=new Historialdeviajes();
}