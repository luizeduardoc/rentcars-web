export class Venda {
    id: number;
    valor: number;
    nomeComprador: string;
    idVeiculo: number;

    constructor(id: number, valor: number, nomeComprador: string, idVeiculo: number) {
        this.id = id;
        this.valor = valor;
        this.nomeComprador = nomeComprador;
        this.idVeiculo = idVeiculo;
    }
}