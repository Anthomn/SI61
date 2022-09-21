import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Padredefamilia } from '../model/padredefamilia';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PadredefamiliaService {
  private url:string= "http://localhost:5003/padredefamilia"
  private listaCambio = new Subject<Padredefamilia[]>()
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
    return this.http.put(this.url + "/" + padredefamilia.id, padredefamilia);
  }
  listarId(id: number) {
    return this.http.get<Padredefamilia>(`${this.url}/${id}`);
  }
}
