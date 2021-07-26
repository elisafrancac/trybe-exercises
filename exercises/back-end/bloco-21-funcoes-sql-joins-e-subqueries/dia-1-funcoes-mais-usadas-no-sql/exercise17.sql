-- Escreva uma query que exiba o sobrenome e a data de contratação de todos 
-- os funcionário contratados em julho de 1987.
SELECT last_name, hire_date
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 AND YEAR(HIRE_DATE)=1987;
