console.log("Hello, World!");

// Função para calcular IMC
function calcularIMC(altura, peso) {
  // altura deve estar em metros (ex: 1.75)
  // peso deve estar em kg (ex: 70)

  const imc = peso / (altura * altura);

  console.log(`Altura: ${altura}m`);
  console.log(`Peso: ${peso}kg`);
  console.log(`IMC: ${imc.toFixed(2)}`);

  // Classificação do IMC
  if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("Classificação: Peso normal");
  } else if (imc >= 25 && imc < 30) {
    console.log("Classificação: Sobrepeso");
  } else {
    console.log("Classificação: Obesidade");
  }
}

// Leitura dos valores do teclado
const alturaInput = prompt("Digite sua altura (em metros, ex: 1.75):");
const pesoInput = prompt("Digite seu peso (em kg, ex: 70):");

// Converter para número
const altura = parseFloat(alturaInput);
const peso = parseFloat(pesoInput);

// Validar os valores
if (!isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
  calcularIMC(altura, peso);
} else {
  console.log("Valores inválidos! Digite números positivos para altura e peso.");
}
