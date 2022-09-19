import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Padredefamilia } from '../model/padredefamilia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PadredefamiliaService {
  private url:string= "http://localhost:5003/padredefamilia"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Padredefamilia[]>(this.url);
  }
}
