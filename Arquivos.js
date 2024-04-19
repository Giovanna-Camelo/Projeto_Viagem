const fs = require('fs');

//Dados que serão exportados para o zrquivo json
const dados ={
    Destino: 'Roma',
    Passagem: 'Avião',
    Hospedagem: 'Hotel 1',
    Meio_De_transporte: 'Moto',
    Limite_de_gastos: 1500,
    Primeiro_Passeio: 'Visita ao Coliseu, Monte Palatino e Fórum Romano Visita Guiada',
    Segundo_Passeio: 'Aulas de culinaria',
    Terceiro_Passeio:'Degustação de vinho',
}

//convertendo dados para formato json
const dadosJSON = JSON.stringify(dados);

//especificar o nome do arquivo
const nomeDoArquivo = 'dados.json';

fs.writeFile(nomeDoArquivo,dadosJSON,(err)=>{
    if(err){console.error('ocoreu um erro na gravação',err);
return;
}
    console.log("Arquivo json criado")
})
