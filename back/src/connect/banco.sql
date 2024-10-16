CREATE DATABASE bloco;

use bloco;

create table tarefa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    data_tarefa date
);
