import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Conductor } from '../model/conductor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
url:string= "http://localhost:5003/conductor"
private listaCambio = new Subject<Conductor[]>()
private confirmaEliminacion = new Subject<Boolean>()
constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Conductor[]>(this.url);
  }


  insertar(conductor: Conductor) {
    return this.http.post(this.url, conductor);
  }
  setLista(listaNueva: Conductor[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(conductor: Conductor) {
    return this.http.put(this.url + "/" + conductor.id, conductor);
  }
  listarId(id: number) {
    return this.http.get<Conductor>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
