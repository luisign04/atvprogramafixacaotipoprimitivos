const valorInicial = 1500 
const desconto = 15

let valorDesconto = (valorInicial * desconto) / 100

const precoFinal = valorInicial - valorDesconto 

console.log("R$ "+ valorInicial)
console.log("Desconto de " + desconto + "%")
console.log('R$ '+ precoFinal)