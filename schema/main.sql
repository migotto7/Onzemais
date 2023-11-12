CREATE DATABASE onzemais;

USE onzemais;

CREATE TABLE
    empresas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cnpj VARCHAR(255) UNIQUE,
        cep VARCHAR(255),
        bairro_endereco VARCHAR(255),
        numero_endereco VARCHAR(255),
        rua_endereco VARCHAR(255),
        horario_comercial_inicio VARCHAR(255),
        horario_comercial_final VARCHAR(255),
        nome VARCHAR(255)
    );

CREATE TABLE
    espacos_esportivos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tamanho VARCHAR(255),
        capacidade INT,
        tipo_espaco VARCHAR(255),
        valor_hora INT,
        empresa_id INT,
        FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE
    );

CREATE TABLE
    coletes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cor VARCHAR(255),
        valor_quantidade INT,
        empresa_id INT,
        FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE
    );

CREATE TABLE
    usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        senha VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        nome VARCHAR(255),
        perfil VARCHAR(255),
        empresa_id INT,
        FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE
    );

CREATE TABLE
    locacoes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        foi_pago BOOLEAN,
        usuarioId INT,
        empresa_id INT,
        FOREIGN KEY (usuarioId) REFERENCES usuarios(id) ON DELETE CASCADE,
        FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE
    );

CREATE TABLE
    aluguel_colete (
        id INT AUTO_INCREMENT PRIMARY KEY,
        coleteId INT,
        locacaoId INT,
        data_inicio_locacao DATETIME,
        data_final_locacao DATETIME,
        FOREIGN KEY (coleteId) REFERENCES coletes(id) ON DELETE CASCADE,
        FOREIGN KEY (locacaoId) REFERENCES locacoes(id) ON DELETE CASCADE
    );

CREATE TABLE
    campeonatos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255)
    );

CREATE TABLE
    partidas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        data_inicio_locacao DATETIME,
        data_final_locacao DATETIME,
        duracao_horas INT,
        locacaoId INT,
        valor INT,
        espacoId INT,
        campeonatoId INT,
        FOREIGN KEY (locacaoId) REFERENCES locacoes(id) ON DELETE CASCADE,
        FOREIGN KEY (espacoId) REFERENCES espacos_esportivos(id) ON DELETE CASCADE,
        FOREIGN KEY (campeonatoId) REFERENCES campeonatos(id) ON DELETE CASCADE
    );