SELECT job_id, SUM(salary) AS total_by_job
FROM hr.employees
GROUP BY job_id;
