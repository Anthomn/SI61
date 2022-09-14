import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Conductor } from '../model/conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
private url:string= "http://localhost:5003/conductor"
constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Conductor[]>(this.url);
  }
}
