import { Veiculo } from './../models/Veiuclo';
import { FilterVeiculo } from './../models/FilterVeiculo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  url = 'https://rentcars-api.herokuapp.com/api/Veiculo/';
  
  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAllVeiculos(): Observable<Veiculo[]> {
    return this.httpClient.get<Veiculo[]>(this.url);
  }

  getVeiculosByFilter(filter: FilterVeiculo): Observable<Veiculo[]> {
    let query = 'filter?';
    const filters = new Array<string>();

    if(filter.arCondicionado) {
      filters.push(`ArCondicionado=${filter.arCondicionado}`);
    }

    if(filter.cor) {
      filters.push(`Cor=${filter.cor}`);
    }

    if(filter.marca) {
      filters.push(`Marca=${filter.marca}`);
    }

    if(filter.modelo) {
      filters.push(`Modelo=${filter.modelo}`);
    }

    if(filter.number) {
      filters.push(`Number=${filter.number}`);
    }

    if(filter.take) {
      filters.push(`Take=${filter.take}`);
    }

    if(filters.length === 0) {
      return this.getAllVeiculos().pipe(map(x => x as Veiculo[]));
    }

    let isFirst = true;
    filters.forEach(x => {
      if(isFirst) {
        query = `${query}${x}`;
      } else {
        query = `${query}&${x}`;
      }
      isFirst = false;
    });

    return this.httpClient.get<Veiculo[]>(`${this.url}${query}`);
  }
}
