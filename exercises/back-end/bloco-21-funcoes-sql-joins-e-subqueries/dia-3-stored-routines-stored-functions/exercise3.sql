-- Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos,
-- deve enviar uma informação para a tabela movies_logs , onde devem ser guardados
-- a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.

USE BeeMovies;
DELIMITER $$

CREATE TRIGGER delete_movie
	BEFORE DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, delete_date)
		VALUES(OLD.movie_id, 'DELETE', NOW());
END $$
