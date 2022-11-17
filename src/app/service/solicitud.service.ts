import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../model/solicitud';
import { Subject, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
    private url: string = `${environment.host}/solicitud`
    private listaCambio = new Subject<Solicitud[]>()
    private confirmaEliminacion = new Subject<Boolean>()
    constructor(private http: HttpClient) { }
  
    listar() {
      return this.http.get<Solicitud[]>(this.url);
    }
    insertar(solicitud: Solicitud) {
  
      return this.http.post(this.url, solicitud);
    }
  
    modificar(solicitud: Solicitud) {
  
      return this.http.put(this.url, solicitud);
    }
    eliminar(id: number) {
  
      return this.http.delete(`${this.url}/${id}`);
    }
    buscar(texto: string) {
      console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Solicitud[]>(`${this.url}/buscarnombrehijo`, texto.toLowerCase()/*,{}*/);
    }
    return EMPTY;
    //return this.http.post<Solicitud[]>(`${this.url}/buscar`, texto);
    }
    listarId(id: number) {
  
      return this.http.get<Solicitud>(`${this.url}/${id}`);
    }
    getLista() {
      return this.listaCambio.asObservable();
    }
    setLista(listaNueva: Solicitud[]) {
      this.listaCambio.next(listaNueva);
    }
    getConfirmaEliminacion() {
      return this.confirmaEliminacion.asObservable();
    }
    setConfirmaEliminacion(estado: Boolean) {
      this.confirmaEliminacion.next(estado);
    }
  }
  
