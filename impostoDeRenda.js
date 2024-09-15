const salario = 5000 

let imposto = 0 

if (salario <= 2000) {
    imposto = 0;
} else if (salario <= 3000) {
    imposto = (salario - 2000) * 0.075;
} else if (salario <= 4000) {
    imposto = (salario - 3000) * 0.15 + (3000 - 2000) * 0.075;
} else if (salario <= 5000) {
    imposto = (salario - 4000) * 0.225 + (4000 - 3000) * 0.15 + (3000 - 2000) * 0.075;
} else {
    imposto = (salario - 5000) * 0.275 + (5000 - 4000) * 0.225 + (4000 - 3000) * 0.15 + (3000 - 2000) * 0.075;
}

const salarioLiquido = salario - imposto 

console.log(`Com um salário bruto de R$${salario}, o imposto de renda devido é de R$ ${imposto}"`);
