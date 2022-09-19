import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viajes } from '../model/viajes';
@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private url:string= "http://localhost:5003/viajes"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Viajes[]>(this.url);
  }
}
