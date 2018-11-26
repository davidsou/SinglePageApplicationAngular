import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private http:HttpClient) {} 
  getFaturamento(){
    return this.http.get(environment.apiUrl + 'faturamento');

  }
}
