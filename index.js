function calcularNivel(vitorias, derrotas) {

    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias >= 101) {
        nivel = 'Imortal';
    } else if (vitorias >= 91) {
        nivel = 'Lendário';
    } else if (vitorias >= 81) {
        nivel = 'Diamante';
    } else if (vitorias >= 51) {
        nivel = 'Ouro';
    } else if (vitorias >= 21) {
        nivel = 'Prata';
    } else if (vitorias >= 11) {
        nivel = 'Bronze';
    } else if (vitorias < 10) {
        nivel = 'Ferro';
    }

    return `O Herói tem saldo de ${saldoVitorias} vitórias e está no rank ${nivel}`;
}

console.log(calcularNivel(55, 20));
console.log(calcularNivel(85, 30));
console.log(calcularNivel(10, 5));