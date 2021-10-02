INSERT INTO department (name)
VALUES
('Frontend Developer')
('Backend Developer')
('Fullstack Developer')
('UI/UX Designer')

INSERT INTO role (title, salary, department_id)
VALUES
("Fullstack Junior Developer", 125000, 3)
("Backend Senior Developer", 125000, 2)
("UI Designer", 80000, 4)
("Frontend Senior Developer", 100000, 1)
("Backend Junior Developer", 75500, 2)
("Frontend Junior Developer", 75000, 1)
("Fullstack Senior Developer", 150000, 3)
("UX Designer", 65000, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Albert", "Fonseca", 9, NULL),
("Dad", "Fonseca", 2, 1),
("Mom", "Fonseca", 6, 2),
("Grandma", "Fonseca", 7, 2),
("Aidan", "Fonseca", 5, 2),
("Damoem", "Fonseca", 3, 2),
("Hydro", "Flask", 8, 6),
("Computer", "Screen", 6, 6),
("Need", "Water", 1, 2),
("Jamal", "Taylor", 4, 6);