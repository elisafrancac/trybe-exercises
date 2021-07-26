-- Escreva uma query que exiba quatro informações: o maior salário, o menor salário, 
-- a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados 
-- para ter apenas duas casas decimais.
SELECT MAX(ROUND(salary, 2)),
MIN(ROUND(salary, 2)),
SUM(ROUND(salary, 2)),
AVG(ROUND(salary, 2))
FROM hr.employees;
