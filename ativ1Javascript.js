//Indicando a data inicial e data desejada para o evento
let DataInicial = new Date (2022,8,18)
console.log("Bem-vindo(a) ao registrador de eventos.")

let dataEvento = new Date (2022,8,19)
if (dataEvento > DataInicial) {console.log("Data registrada.")}
else {console.log("Data inválida.")}


//Registrando participantes
let IdadeDoParticipante = 27

if (IdadeDoParticipante < 18) {console.log("Cadastro inválido, participantes precisam ser maiores de idade.")}
else {console.log("Cadastro validado.")}


//Verificação do número de participantes
let ListaDeParticipantes = 99

if (ListaDeParticipantes < 100) {console.log("Cadastro do evento foi realizado.")}
else {console.log("Cadastro não permitido, limite máximo de participantes não atendido.")}