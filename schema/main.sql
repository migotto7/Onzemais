CREATE DATABASE onzemais;

use onzemais;

CREATE TABLE
    espaco_esportivo (
        espaco_id INT PRIMARY KEY,
        tipo_espaco VARCHAR(255),
        tamanho VARCHAR(255),
        capacidade INT,
        descricao TEXT
    );

CREATE TABLE
    empresa (
        cnpj VARCHAR(255) PRIMARY KEY,
        cep VARCHAR(255),
        bairro_endereco VARCHAR(255),
        numero_endereco VARCHAR(255),
        rua_endereco VARCHAR(255),
        horario_comercial VARCHAR(255),
        nome VARCHAR(255),
        espaco_id INT,
        Foreign Key (espaco_id) REFERENCES espaco_esportivo(espaco_id)
    );

CREATE TABLE
    cliente(
        cliente_id INT PRIMARY KEY,
        senha VARCHAR(255),
        email VARCHAR(255),
        nome VARCHAR(255),
        empresa_cnpj VARCHAR(255),
        FOREIGN KEY (cnpj) REFERENCES empresa(cnpj)
    );

CREATE TABLE
    locacao (
        locacao_id INT PRIMARY KEY,
        data_locacao DATE,
        valor INT,
        foi_pago BOOLEAN,
        cliente_id INT,
        FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
    );

CREATE TABLE
    campeonato (
        campeonato_id INT PRIMARY KEY,
        nome VARCHAR(255)
    );

CREATE TABLE
    partida(
        partida_id INT PRIMARY key,
        duracao_horas INT,
        locacao_id INT,
        espaco_id INT,
        campeonato_id INT,
        FOREIGN KEY (locacao_id) REFERENCES locacao(locacao_id),
        FOREIGN KEY (espaco_id) REFERENCES espaco_esportivo(espaco_id),
        FOREIGN KEY (campeonato_id) REFERENCES campeonato(campeonato_id)
    );

CREATE Table
    colete(
        colete_id INT PRIMARY key,
        cor VARCHAR(255),
        quantidade INT,
        emprasa_cnpj VARCHAR(255),
        Foreign Key (empresa_cnpj) REFERENCES empresa(empresa_cnpj)
    );

CREATE TABLE
    locacao_colete (
        locacao_colete_id INT PRIMARY KEY,
        locacao_id INT,
        colete_id INT,
        FOREIGN KEY (locacao_id) REFERENCES locacao(locacao_id),
        FOREIGN KEY (colete_id) REFERENCES colete(colete_id)
    );

CREATE TABLE
    narracao(
        narracao_id INT PRIMARY KEY,
        narradores VARCHAR(255)
    );