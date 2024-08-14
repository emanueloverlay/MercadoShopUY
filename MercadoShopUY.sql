-- Crear la BD
CREATE DATABASE MercadoShopUY;

-- Seleccionar la BD
USE MercadoShopUY;

-- Crear la tabla products
CREATE TABLE products (
    id VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    thumbnail VARCHAR(255),
    permalink VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
