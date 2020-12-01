export class FilterVeiculo {
    arCondicionado: boolean;
    automatico: boolean;
    cor: string;
    modelo: string;
    marca: string;
    number: number;
    take: number;

    constructor(arCondicionado: boolean, cor: string, modelo: string, marca: string, automatico: boolean) {
        this.arCondicionado = arCondicionado;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.automatico = automatico;
    }
}