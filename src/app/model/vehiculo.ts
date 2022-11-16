import { Marca } from './marca';
import { Conductor } from "./conductor"

export class Vehiculo{
    id:number=0;
    aniomodelo:number=0;
    placa: string ="";
    color: string = "";
    estado: string ="";
    marca: Marca=new Marca();
    caracteristica: string ="";
    conductor:Conductor=new Conductor();

}
  