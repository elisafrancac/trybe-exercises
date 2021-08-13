// Exercício 13 : Para os filmes Batman ou Home Alone , atribua a imdbRating o valor 17 , caso o valor de imdbRating seja menor que 17 .
db.movies.updateMany(
  {},
  {
    $max: {
      imdbRating: 17
    }
  }
);
db.movies.find();
