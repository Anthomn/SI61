import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historialdeviajes } from '../model/historialdeviajes';
@Injectable({
  providedIn: 'root'
})
export class HistorialdeviajesService {

  private url:string= "http://localhost:8080/historialviaje"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Historialdeviajes[]>(this.url);
  }
}
