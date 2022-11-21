import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Padredefamilia } from '../model/padredefamilia';
import { environment } from 'src/environments/environment';
import { Subject, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PadredefamiliaService {
  private url:string= "http://backend-safeport-postgress.herokuapp.com/padredefamilia"
  private listaCambio = new Subject<Padredefamilia[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Padredefamilia[]>(this.url);
  }
  insertar(padredefamilia: Padredefamilia) {
    return this.http.post(this.url, padredefamilia);
  }
  setLista(listaNueva: Padredefamilia[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(padredefamilia: Padredefamilia) {
    return this.http.put(this.url , padredefamilia); //+ "/" + padredefamilia.id
  }
  listarId(id: number) {
    return this.http.get<Padredefamilia>(`${this.url}/${id}`);
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
      return this.http.post<Padredefamilia[]>(`${this.url}/buscarnombre`, texto.toLowerCase()/*,{}*/);
    }
    return EMPTY;
  }
}
