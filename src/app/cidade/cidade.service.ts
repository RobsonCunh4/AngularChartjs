import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private baseUrl = "http://localhost:3000/";
  private endPoint = 'cidades';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Cidade[]>{
   return this.httpClient.get<Cidade[] >(`${this.baseUrl}/${this.endPoint}`);
  }
}
