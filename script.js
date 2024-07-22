window.onload


// Função para calcular o IMC
function calcularIMC(peso, altura) {
    // Se a altura estiver em centímetros, converter para metros
    if (altura > 3) {
        altura = altura / 100;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Determinar a classificação do IMC
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Retornar o resultado do IMC e a classificação
    return { imc: imc.toFixed(2), classificacao: classificacao };
}

// Função para lidar com o envio do formulário
document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const resultado = calcularIMC(peso, altura);

    document.getElementById('resultado').textContent = `IMC: ${resultado.imc} - Classificação: ${resultado.classificacao}`;
});


