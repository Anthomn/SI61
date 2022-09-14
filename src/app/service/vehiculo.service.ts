import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
private url:string= "http://localhost:5003/vehiculo"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Vehiculo[]>(this.url);
  }
}
