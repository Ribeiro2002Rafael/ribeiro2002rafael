function calcularDesconto(diasFalta, retribuicaoMensal = 1600) {
    // Dados fixos: 35h semanais, 7h/dia
    const horasSemanais = 35;
    const horasDia = 7;

    // Fórmula do art. 271.º CT: valor hora = (Rm * 12) / (52 * n)
    const valorHora = (retribuicaoMensal * 12) / (52 * horasSemanais);
    const valorDia = valorHora * horasDia;

    // Cálculo do desconto (assume-se sempre falta com perda de retribuição)
    const descontoRetribuicao = valorDia * diasFalta;
    const salarioFinal = retribuicaoMensal - descontoRetribuicao;

    return {
        salario_base: Number(retribuicaoMensal.toFixed(2)),
        valor_hora: Number(valorHora.toFixed(2)),
        valor_dia: Number(valorDia.toFixed(2)),
        desconto_retribuicao: Number(descontoRetribuicao.toFixed(2)),
        salario_final: Number(salarioFinal.toFixed(2))
    };
}

// Exemplo de utilização (versão Node.js)
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduza o nº de dias em falta: ", (input) => {
    const diasFalta = parseInt(input, 10);
    const resultado = calcularDesconto(diasFalta);

    console.log("\n--- Resultado ---");
    for (const [key, value] of Object.entries(resultado)) {
        console.log(`${key}: ${value} €`);
    }

    rl.close();
});
