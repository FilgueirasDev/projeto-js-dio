let nivel = ''

function saldoVitorias(wins, losses) {
    saldo = wins - losses;
    return saldo;
}

function verificarNivel() {
    if (saldo < 10) {
        return nivel = 'Ferro';
    } if (saldo >= 11 && saldo <= 20) {
        return nivel = 'Bronze';
    } if (saldo >= 21 && saldo <= 50) {
        return nivel = 'Prata';
    } if (saldo >= 51 && saldo <= 80) {
        return nivel = 'Ouro';
    } if (saldo >= 81 && saldo <= 90) {
        return nivel = 'Diamante';
    } if (saldo >= 91 && saldo <= 100) {
        return nivel = 'Lendário';
    } else {
        return nivel = 'Imortal';
    }
}

saldoVitorias(111, 10);
verificarNivel();

console.log(`O herói tem saldo de ${saldo} vitórias e está no nível ${nivel}!`);

