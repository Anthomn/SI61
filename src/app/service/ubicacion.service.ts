import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ubicacion } from '../model/ubicacion';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private url:string= "http://localhost:5003/ubicacion"
  private listaCambio = new Subject<Ubicacion[]>()
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
}
