import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';
import { Subject } from 'rxjs';
import { CantidadVehiculoRespuesta } from '../model/cantidadvehiculorespuesta';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
private url:string= "http://backend-safeport-postgress.herokuapp.com/vehiculo"
  private listaCambio = new Subject<Vehiculo[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Vehiculo[]>(this.url);
  }
  insertar(vehiculo: Vehiculo) {

    return this.http.post(this.url, vehiculo);
  }

  modificar(vehiculo: Vehiculo) {

    return this.http.put(this.url, vehiculo);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto: string) {

    return this.http.post<Vehiculo[]>(`${this.url}/buscarplaca`, texto);
  }
  estado(){
    return this.http.get<Vehiculo[]>(`${this.url}/buscarestado`);
  }
  cantidad(){
    return this.http.get<CantidadVehiculoRespuesta[]>(`${this.url}/cantidad`);
  }
  listarId(id: number) {

    return this.http.get<Vehiculo>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Vehiculo[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
