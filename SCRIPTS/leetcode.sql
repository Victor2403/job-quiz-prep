-- Select the names of employees who earn more than their managers.
SELECT e1.Name AS Employee             -- Select the employee's name and alias the column as 'Employee'.
FROM Employee e1                       -- Use alias e1 for the Employee table representing the employee.
LEFT JOIN Employee e2                  -- Join again to the Employee table using alias e2 representing the manager.
    ON e2.Id = e1.ManagerId            -- Match each employee with their manager by managerId.
WHERE e2.Salary < e1.Salary;          -- Only include rows where the employee earns more than their manager.

-- ✅ This solution joins each employee with their manager and filters those earning more than their manager.
