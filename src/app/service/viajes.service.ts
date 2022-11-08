import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viajes } from '../model/viajes';
import { environment } from 'src/environments/environment';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private url:string= "http://localhost:8080/viaje"
  private listaCambio = new Subject<Viajes[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Viajes[]>(this.url);
  }
  insertar(viajes: Viajes) {
    return this.http.post(this.url, viajes);
  }
  setLista(listaNueva: Viajes[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(viajes: Viajes) {
    return this.http.put(this.url , viajes); //+ "/" + padredefamilia.id
  }
  listarId(id: number) {
    return this.http.get<Viajes>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    //return this.http.delete(this.url + "/" + id);
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Viajes[]>(`${this.url}/buscar`, texto.toLowerCase()/*,{}*/);
    }
    return EMPTY;
  }
}
