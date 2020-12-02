export class CreateAluguel {
    idVeiculo: number;
    valor: number;
    nome: string;
    dataEntrega: Date;
    dataRetirada: Date;

    constructor(valor: number, nome: string, idVeiculo: number, dataEntrega: Date, dataRetirada: Date) {
        this.valor = valor;
        this.nome = nome;
        this.idVeiculo = idVeiculo;
        this.dataEntrega = dataEntrega;
        this.dataRetirada = dataRetirada;
    }
}
