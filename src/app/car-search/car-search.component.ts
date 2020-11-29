import { Veiculo } from './../models/Veiuclo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterVeiculo } from '../models/FilterVeiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  public filterForm: FormGroup;
  public veiculos: Veiculo[];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public onSearch(): void {    
    const filter = this.filterForm.value as FilterVeiculo;
    this.veiculoService.getCarsByFilter(filter).subscribe((data: Veiculo[]) => {
      this.veiculos = data;
      console.log(data);
    }, (error: any) => {
      console.log("erro no filtro");
    });
  }

  private buildForm(): void {
    this.filterForm = new FormGroup({
      cor: new FormControl(null),
      marca: new FormControl(null),
      modelo: new FormControl(null)
    })
  }

}
