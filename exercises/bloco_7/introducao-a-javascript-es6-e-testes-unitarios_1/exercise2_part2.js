const longestWord = (text) => {
    const textArray = text.split(' ');
    let wordlength = 0;
    result = '';
    textArray.forEach(element => {
        if (element.length > wordlength) {
            wordlength = element.length;
            result = element;
        }
    });
    return result;
}

console.log(longestWord('Quando nada é certeza tudo é possível'));