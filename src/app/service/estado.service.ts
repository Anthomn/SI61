import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../model/estado';
@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url:string= "http://localhost:5003/estado"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Estado[]>(this.url);
  }
}
