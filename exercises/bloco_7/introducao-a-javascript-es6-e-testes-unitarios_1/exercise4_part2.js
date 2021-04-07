// Primeira Função
const firstFunction = (phrase, word) => {
    const splitPhrase = phrase.split(' ');
    let newPhrase = '';
    splitPhrase.forEach(element => {
        if (element === 'x') {
            element = word;
        }
        newPhrase += `${element} `;
    });
    return newPhrase;
}

console.log(firstFunction('Tryber x aqui!','bebeto'));

// Segunda Função
const skills = ['HTML', 'CSS', 'JavaScript', 'Soft Skills', 'Git', 'Github'];
const secondFunction = (string) => {
    let orderedSkills = skills.sort();
    let skillsString = orderedSkills.join('\n');
    
    return`${string} Minhas cinco principais habilidades são:
${skillsString} `;

}

console.log(secondFunction(firstFunction('Tryber x aqui!','Elisa')));
 