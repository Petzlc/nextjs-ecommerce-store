-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(100) NOT NULL,
  variety varchar(100) NOT NULL,
  type varchar(30) NOT NULL,
  producer varchar(100) NOT NULL,
  region varchar(100) NOT NULL,
  year varchar(100) NOT NULL,
  price integer NOT NULL
);

INSERT INTO products
(name, variety, type, producer, region, year, price)
VALUES
  ('Belle Naturelle', 'Gruener Veltliner', 'White', 'Jurtschitsch', 'Langenlois', '2022', '19'),
  ('Ein Wildes Glaeschen Rose', 'Cuvee Rose', 'Rose', 'Zahel', 'Vienna', '2022', '17'),
  ('gluegglich', 'Cuvee White', 'White', 'Loimer', 'Langenlois', '2020', '11'),
  ('Kieselstein', 'Zweigelt', 'Red', 'Claus Preisinger', 'Gols', '2022', '14');



SELECT * FROM products
CREATE DATABASE ecommerce;
CREATE USER ecommerce WITH ENCRYPTED PASSWORD 'ecommerce';
GRANT ALL PRIVILEGES ON DATABASE ecommerce TO ecommerce;
\connect ecommerce;
CREATE SCHEMA ecommerce AUTHORIZATION ecommerce;
