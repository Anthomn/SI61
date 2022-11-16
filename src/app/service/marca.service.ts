import { Marca } from './../model/marca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  url:string= "http://localhost:8080/marca"
  private listaCambio = new Subject<Marca[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Marca[]>(this.url);
  }


  insertar(conductor: Marca) {
    return this.http.post(this.url, conductor);
  }
  setLista(listaNueva: Marca[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(conductor: Marca) {
    return this.http.put(this.url , conductor);  //+ "/" + conductor.id
  }
  listarId(id: number) {
    return this.http.get<Marca>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
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
      return this.http.post<Marca[]>(`${this.url}/buscar`, texto.toLowerCase()/*,{}*/);
    }
    return EMPTY;
  }

}
