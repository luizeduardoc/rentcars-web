export class CreateVenda {
    idVeiculo: number;
    valor: number;
    nomeComprador: string;

    constructor(valor: number, nomeComprador: string, idVeiculo: number) {        
        this.valor = valor;
        this.nomeComprador = nomeComprador;
        this.idVeiculo = idVeiculo;
    }
}