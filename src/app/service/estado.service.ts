import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../model/estado';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url: string = `${environment.host}/solicitud`
  private listaCambio = new Subject<Estado[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar() {
    return this.http.get<Estado[]>(this.url);
  }
  insertar(solicitud: Estado) {

    return this.http.post(this.url, solicitud);
  }

  modificar(solicitud: Estado) {

    return this.http.put(this.url, solicitud);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Estado[]>(`${this.url}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Estado>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Estado[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
