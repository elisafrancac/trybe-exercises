let chessPiece = 'knIgHt';

switch (chessPiece.toLowerCase()) {
    case "bishop":
        console.log("Se movimenta ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "knight":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case "rook":
        console.log("Se movimenta pela vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case "queen":
        console.log("Se movimenta ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "king":
        console.log("Se movimenta em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez");
        break;
    case "pawn":
        console.log("Se movimenta apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    default:
        console.log("Peça inválida");        
}
