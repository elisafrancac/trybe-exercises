--  Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT  JOB_ID, AVG(salary) AS 'avarage_salary_by_jobId'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `avarage_salary_by_jobId` DESC;
