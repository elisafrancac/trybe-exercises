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


SELECT 
    m.title
FROM Pixar.Movies AS m
    INNER JOIN
		Pixar.BoxOffice AS b ON b.movie_id = m.id
	WHERE
		b.rating > 7.5;            