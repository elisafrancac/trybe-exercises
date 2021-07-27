-- Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
-- que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT title
FROM Pixar.Movies
WHERE id 
	IN (SELECT 
            movie_id
        FROM
            Pixar.BoxOffice
        WHERE
            rating > 7.5);
            