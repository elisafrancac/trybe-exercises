-- Escreva uma query que exiba a quantidade de dinheiro necessária 
-- para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT job_id, SUM(salary) AS total_by_job
FROM hr.employees
GROUP BY job_id;
