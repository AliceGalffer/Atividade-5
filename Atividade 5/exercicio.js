

// Função para verificar a data atual
function verificarDataAtual(dia, mes) {
    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth() + 1; // Meses são indexados de 0 a 11, então adicionamos 1
    
    return (dia === diaAtual && mes === mesAtual);
}

// Função principal para verificar as condições
function verificarCondicoes(nome, dia, mes) {
    // Condição para Celso Portiolli no dia 11 de Setembro
    if (nome === "Celso Portiolli" && dia === 11 && mes === 9) {
        window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro");
    }
    
    // Condição para a data atual (04/07) e o nome do usuário
    if (verificarDataAtual(dia, mes) && nome.toLowerCase() === "seu") {
        window.alert("Faça a prova com atenção");
    }
}

// Exemplo de uso
var nome = prompt("Digite o nome:");
var dia = parseInt(prompt("Digite o dia (somente o número):"));
var mes = parseInt(prompt("Digite o mês (somente o número):"));

verificarCondicoes(nome, dia, mes);

// Exibir idade em um alert
var idade = 25; // Suponha que a idade seja 25 (substitua pelo código real de obtenção da idade)
window.alert("Sua idade é: " + idade + " anos");

// Cálculo da média e verificação de aprovação/reprovação
var num1 = parseFloat(prompt("Digite sua primeira nota"));
var num2 = parseFloat(prompt("Digite sua segunda nota"));
var num3 = parseFloat(prompt("Digite sua terceira nota"));

var media = (num1 + num2 + num3) / 3;

if (media >= 60) {
    window.alert("Parabéns, você foi aprovado!");
} else {
    window.alert("Infelizmente, você foi reprovado. Estude mais para a próxima!");
}


// Função para calcular a potência de um número
function calcularPotencia(base, expoente) {
    return base ** expoente;
}

// Solicitar os números ao usuário
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número (expoente):"));
var resultado = calcularPotencia(numero1, numero2);// Calcular e imprimir o resultado da potência

// Verificar se o cálculo da potência está correto
console.log("O resultado de " + numero1 + " elevado a " + numero2 + " é: " + resultado);

// Exibir o resultado da potência em um alerta
window.alert("O resultado de " + numero1 + " elevado a " + numero2 + " é: " + resultado);