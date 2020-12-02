import { AluguelService } from './../../services/aluguel.service';
import { VendaService } from './../../services/venda.service';
import { CreateVenda } from './../../models/CreateVenda';
import { Veiculo } from '../../models/Veiculo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterVeiculo } from '../../models/FilterVeiculo';
import { VeiculoService } from '../../services/veiculo.service';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CreateAluguel } from 'src/app/models/CreateAluguel';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  public filterForm: FormGroup;
  public modalForm: FormGroup;
  public veiculos: Veiculo[] = [];
  public veiculoModal: Veiculo;

  constructor(private veiculoService: VeiculoService, private modalService: NgbModal, private vendaService: VendaService, private aluguelService: AluguelService) { }

  ngOnInit(): void {
    this.buildForm();
    this.buildModalForm();
  }

  public onSearch(): void {
    const filter = this.filterForm.value as FilterVeiculo;
    this.veiculoService.getVeiculosByFilter(filter).subscribe((data: Veiculo[]) => {
      this.veiculos = data;
      console.log(data);
    }, (error: any) => {
      console.log(error);
    });
  }

  private buildForm(): void {
    this.filterForm = new FormGroup({
      cor: new FormControl(null),
      marca: new FormControl(null),
      modelo: new FormControl(null),
      arCondicionado: new FormControl(false),
      automatico: new FormControl(false)
    });
  }

  private buildModalForm(): void {
    this.modalForm = new FormGroup({
      dataRetirada: new FormControl(null),
      horaRetirada: new FormControl(null),
      dataEntrega: new FormControl(null),
      horaEntrega: new FormControl(null),
      nome: new FormControl(null),
      nomeAluguel: new FormControl(null)
    });
  }

  open(content, veiculo: Veiculo) {
    this.veiculoModal = veiculo;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  public onOperacao() {
    if (this.veiculoModal.tipoOperacao === 'Venda') {      
      let venda = new CreateVenda(this.veiculoModal.preco, this.modalForm.value.nome, this.veiculoModal.id);      
      this.vendaService.createVenda(venda).subscribe((data: any) => {
        console.log(data);
      }, (error: any) => {
        console.log(error);
      });
    }
    if (this.veiculoModal.tipoOperacao === 'Aluguel') {         
      let dataRetirada = new Date(this.modalForm.value.dataRetirada+'T'+this.modalForm.value.horaRetirada);
      let dataEntrega = new Date(this.modalForm.value.dataEntrega+'T'+this.modalForm.value.horaEntrega);
      let aluguel = new CreateAluguel(this.veiculoModal.preco, this.modalForm.value.nomeAluguel, this.veiculoModal.id, dataRetirada, dataEntrega);            
      this.aluguelService.createVenda(aluguel).subscribe((data: any) => {
        console.log(data);
      }, (error: any) => {
        console.log(error);
      });
    }
  }

}
