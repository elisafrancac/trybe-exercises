-- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade
-- de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT job_id, SUM(salary) AS it_prog_total
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";
