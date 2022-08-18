const listPecas = ['Lanternas', 'Rodas', 'Parabrisas']

console.log("Bem-vindo ao gerenciador de peças.")

let massaPeca = 99
if (massaPeca > 100) {console.log("Massa dentro da faixa permitida; cadastro permitido.")}
else {console.log("Massa fora da faixa permitida; cadasto negado.")}

let qtdePeca = 11
if (qtdePeca > 10) {console.log("Número de peças excede o limite permitido.")}
else {console.log("Número de peças dentro da faixa permitida.")}

for (let index = 0; index < listPecas.length; index++) {
    const namePeca = listPecas[index];
        if (namePeca.length < 3) {console.log("Nome de peça inválido.")}
        else {console.log("Nome validado")}
}
console.log("Fim do processamento.")