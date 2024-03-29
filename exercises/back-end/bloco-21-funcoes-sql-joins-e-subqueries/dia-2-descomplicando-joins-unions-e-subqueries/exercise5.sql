-- Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes,
-- mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que
-- possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m 
ON t.id = m.theater_id
ORDER BY t.name;
