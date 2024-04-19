class ServicosViagem {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Usuario {
    constructor(limite_de_gastos) {
        this.limite_de_gastos = limite_de_gastos;
        this.servicos_selecionados = [];
    }
    adicionar_servicos(servicos) {
        this.servicos_selecionados.push(servicos);
    }
    verificar_limite_de_gastos() {
        const gastoTotal = this.servicos_selecionados.reduce((total, servicos) => total + servicos.preco, 0);
        return gastoTotal <= this.limite_de_gastos;
    }
}

class Viagem {
    constructor(destino, acomodacao, passeios, meio_de_transporte) {
        this.destino = destino;
        this.acomodacao = acomodacao;
        this.passeios = passeios;
        this.meio_de_transporte = meio_de_transporte;
    }
    calcularCustoTotal() {
        let custoTotal = 0;
        this.passeios.forEach(passeio => {
            custoTotal += passeio.custo;
        });
        return custoTotal;
    }
}

const usuario = new Usuario(1500); // Limite de gasto selecionado pelo cliente

const voo1 = new ServicosViagem("Voo", 500);
const voo2 = new ServicosViagem("Voo", 300);
const voo3 = new ServicosViagem("Voo", 700);
const hospedagem1 = new ServicosViagem("Hospedagem", 400);
const hospedagem2 = new ServicosViagem("Hospedagem", 350);
const hospedagem3 = new ServicosViagem("Hospedagem", 750);
const aluguelCarro = new ServicosViagem("Aluguel de Carro", 200);
const aluguelMoto = new ServicosViagem("Aluguel de Moto", 250);

usuario.adicionar_servicos(voo2);
usuario.adicionar_servicos(hospedagem1);
usuario.adicionar_servicos(aluguelMoto);

if (usuario.verificar_limite_de_gastos()) {
    console.log("Os serviços selecionados com Viagem, hospedagem e meio de transporte estão dentro do limite de gastos desejado.");
} else {
    console.log("Os serviços selecionados ultrapassam o limite de gasto selecionado.");
}

const passeioDeBarco = new ServicosViagem("Passeio de barco", 50);
const visitaMuseu = new ServicosViagem("Visita ao Museu", 38);
const aulaCulinaria = new ServicosViagem("Aulas de culinaria", 70);
const degustacaoVinho = new ServicosViagem("Degustação de vinho", 60);
const visitaColiseu = new ServicosViagem("Visita ao Coliseu, Monte Palatino e Fórum Romano Visita Guiada", 100);

const atividadesUsuario = [
    { nome: 'Visita ao Coliseu, Monte Palatino e Fórum Romano Visita Guiada', custo: 100 },
    { nome: 'Aulas de culinaria', custo: 70 },
    { nome: 'Degustação de vinho', custo: 60 }
];

const minhaViagem = new Viagem('Roma', 'Hotel', atividadesUsuario, 'Avião');

console.log('Custo total dos passeios da viagem:', minhaViagem.calcularCustoTotal());
