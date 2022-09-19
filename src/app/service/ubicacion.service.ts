import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ubicacion } from '../model/ubicacion';
@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private url:string= "http://localhost:5003/ubicacion"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Ubicacion[]>(this.url);
  }
}
