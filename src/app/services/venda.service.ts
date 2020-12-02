import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateVenda } from '../models/CreateVenda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  url = 'https://rentcars-api.herokuapp.com/api/Venda/';
  
  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  }

  createVenda(veiculo: CreateVenda): any {   
    return this.httpClient.post(this.url, veiculo, this.httpOptions);
  }
}
