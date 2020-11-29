export class FilterVeiculo {
    arCondicionado: boolean;
    cor: string;
    modelo: string;
    marca: string;
    number: number;
    take: number;

    constructor(arCondicionado: boolean, cor: string, modelo: string, marca: string) {
        this.arCondicionado = arCondicionado;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
}