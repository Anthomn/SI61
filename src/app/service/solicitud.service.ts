import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../model/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
private url:string= "http://localhost:5003/solicitud"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Solicitud[]>(this.url);
  }
}
