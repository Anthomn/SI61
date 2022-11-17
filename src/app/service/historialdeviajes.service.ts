import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historialdeviajes } from '../model/historialdeviajes';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistorialdeviajesService {

  private url:string= "http://localhost:8080/historialviaje"
  private listaCambio = new Subject<Historialdeviajes[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Historialdeviajes[]>(this.url);
  }
  insertar(vehiculo: Historialdeviajes) {
  
    return this.http.post(this.url, vehiculo);
  }

  modificar(vehiculo: Historialdeviajes) {
  
    return this.http.put(this.url, vehiculo);
  }

  eliminar(id: number) {
  
    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Historialdeviajes[]>(`${this.url}/buscarhistorial`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
    //return this.http.post<Historialdeviajes[]>(`${this.url}/buscar`, texto);
  }

  listarId(id: number) {
  
    return this.http.get<Historialdeviajes>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Historialdeviajes[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
