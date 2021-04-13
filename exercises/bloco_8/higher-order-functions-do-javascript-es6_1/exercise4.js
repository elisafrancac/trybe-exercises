// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é 
// uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela 
// pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e 
// quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];



const checkAnswers = (correctAnswers, answersToCheck, checkAndCountFunction) => {
    let correctAnswersResult = 0;
    correctAnswers.forEach((answer, index) => {
        const checkAndCountFunctionReturn = checkAndCountFunction(answer[index], answersToCheck[index]);
        correctAnswersResult += checkAndCountFunctionReturn;
    })
    return `Quantidade de respostas corretas: ${correctAnswersResult}`;
}

const checkAndCount = (corrects, studentAnswers) => {
    let grade = 0;
        if (studentAnswers === corrects) {
            return 1;
        }
        if (studentAnswers === 'N.A') {
            return 0;
        }
        return 0.5;
}

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAndCount));