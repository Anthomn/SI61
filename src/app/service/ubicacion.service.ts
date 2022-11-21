import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ubicacion } from '../model/ubicacion';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private url: string =  "https://backend-safeport-postgress.herokuapp.com/ubicacion"
  private listaCambio = new Subject<Ubicacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Ubicacion[]>(this.url);
  }
  insertar(ubicacion: Ubicacion) {
    return this.http.post(this.url, ubicacion);
  }
  setLista(listaNueva: Ubicacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(conductor: Ubicacion) {
    return this.http.put(this.url , conductor);
    //return this.http.put(this.url + "/" + conductor.id, conductor);
  }
  listarId(id: number) {
    return this.http.get<Ubicacion>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    //return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Ubicacion[]>(`${this.url}/buscardistrito`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
