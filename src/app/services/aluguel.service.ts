import { CreateAluguel } from './../models/CreateAluguel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {

  url = 'https://rentcars-api.herokuapp.com/api/Aluguel/';
  
  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  }

  createVenda(veiculo: CreateAluguel): any {   
    return this.httpClient.post(this.url, veiculo, this.httpOptions);
  }
}
