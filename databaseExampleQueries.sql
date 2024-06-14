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
