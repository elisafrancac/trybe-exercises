-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais.
-- As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal.
-- Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

DROP SCHEMA IF EXISTS zoologico;
    CREATE SCHEMA zoologico;
    USE zoologico;

CREATE TABLE animals(
        animal_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        specie VARCHAR(50) NOT NULL,
        gender VARCHAR(50) NOT NULL,
        age INT NOT NULL,
        location VARCHAR(50) NOT NULL
    );
    
CREATE TABLE managers(
        manager_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL
    );

CREATE TABLE caregivers(
		caregiver_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        manager_id INT NOT NULL,
        FOREIGN KEY (manager_id) REFERENCES managers (manager_id)
);

CREATE TABLE animal_caregiver(
		animal_id INT NOT NULL,
        caregiver_id INT NOT NULL,
        CONSTRAINT PRIMARY KEY(animal_id, caregiver_id),
        FOREIGN KEY (animal_id) REFERENCES animals (animal_id),
        FOREIGN KEY (caregiver_id) REFERENCES caregivers (caregiver_id)
);
